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
  constructor(
    private contact : ContactService,
    private messenger : MessengerService) { }

  handleSubmit(){
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


    this.contact_email ='';
    this.contact_message = '';
    this.contact_name = '';
  }

  ngOnInit(): void {
  }

}
