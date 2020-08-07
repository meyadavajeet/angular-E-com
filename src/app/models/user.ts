export interface User {
    name: string;
    email: string;
    password: string;
    phone: string;
    isAdmin ?: boolean;  //here question mark means optional
}