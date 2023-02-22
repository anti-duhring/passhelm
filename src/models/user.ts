export class User {
    id: number;
    username: string;
    email: string;
    name: string;

    constructor({ id, username, email, name }) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
    }


}