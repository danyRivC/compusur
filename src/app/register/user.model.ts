

export class User {
    constructor(
        public email: String,
        public password: string,
        public passwordCheck: string,
        public firstName?: String,
        public lastName?: String
    ) { }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
