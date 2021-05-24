
import { Role } from "./user";

export class User {
    id: number;
    username: string;
    role: Role;
    token?: string;
}
