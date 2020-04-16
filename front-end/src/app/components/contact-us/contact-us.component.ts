import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact_email: string = '';
  contact_name: string = '';
  contact_message: string = '';
  sent_success:string='';

  contactNameErr:string = '';
  contactEmailErr:string = '';
  contactMessageErr:string = '';

  constructor(
    private contact : ContactService,
    private messenger : MessengerService) { }


    validate() {
      let valid = true;
      this.contactNameErr = '';
      this.contactEmailErr = '';
      this.contactMessageErr = '';
  
      if (this.contact_name === '') {
        this.contactNameErr = 'Name cannot be blank';
        valid = false;
      }
  
      if (this.contact_email === '') {
        this.contactEmailErr = 'Email cannot be blank';
        valid = false;
      }

      if (this.contact_message === '') {
        this.contactMessageErr = 'Message cannot be blank';
        valid = false;
      }
      return valid;
    }

  handleSubmit(){
    if (this.validate()){
      const data = {
        subject: this.contact_name,
        to: this.contact_email,
        message: this.contact_message
      };
  
      this.contact.sendEmail(data)
      .subscribe(
        () => {
          this.messenger.sendMsg({
            msg: 'Email sent!',
            type: 'success'
          })
        },
        () => {
          this.messenger.sendMsg({
            msg: 'Email could not be sent!',
            type: 'danger'
          })
        }
      )
      this.sent_success='Successfully sent email!'
  
  
      this.contact_email ='';
      this.contact_message = '';
      this.contact_name = '';
    }
  }

  ngOnInit(): void {
  }

}
