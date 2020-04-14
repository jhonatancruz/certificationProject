import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact_email: string = '';
  contact_name: string = '';
  contact_message: string = '';
  constructor(private contactservice: ContactusService) { }

  handleSubmit(){
    const data = {
      name: this.contact_name,
      email: this.contact_email,
      message: this.contact_message
    };

    this.contactservice.sendEmail(data).subscribe(() => {
      console.log('Sent email')
    })

    this.contact_email ='';
    this.contact_message = '';
    this.contact_name = '';
  }

  ngOnInit(): void {
  }

}
