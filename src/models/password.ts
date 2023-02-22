export class Password {
    id: number;
    userId: number;
    categoryId: number;
    title: string;
    login: string;
    password: string;

    constructor(item) {
        this.id = item.id;
        this.userId = item.userId;
        this.categoryId = item.categoryId;
        this.title = item.title;
        this.login = item.login;
        this.password = item.password;
    }
}