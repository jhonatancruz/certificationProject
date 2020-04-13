export class Users {

    id: number;
    userName: string;
    email: string;
    password: string;
    role: string;
    completed: boolean;
    date: Date;
  
    constructor(id: number, userName: string, role: string,email = '',password: string, completed = false, date = new Date()) {
      this.id = id;
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.role=role;
      this.completed = completed;
      this.date = date;
    }
}
