export class User {
    name: string;
    username: string;
    email: string;
    token: string;

    constructor(name, username, email, token){
        this.name = name;
        this.username = username;
        this.email = email;
        this.token = token;
    }
}
