import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  name:string = '';
  email:string = '';
  username:string = '';
  password:string = '';

  constructor(
    private messenger : MessengerService,
    private loginService : LoginService
  ) { }

  ngOnInit(): void {
  }

      // TODO: complete later
      validate(){
        let validate = true;
    
        return validate;
      }
    
      handleSubmit(){
        if (this.validate()){
          const newUser = {
            name:this.name,
            email:this.email,
            username:this.username,
            password:this.password,
          }

          this.loginService.register(newUser)
          .subscribe(
            () => {
              this.messenger.sendMsg({
                msg: 'User added!',
                type: 'success'
              })
            },
            () => {
              this.messenger.sendMsg({
                msg: 'User could not be added!',
                type: 'danger'
              })
            }
          )
        }
      }

}
