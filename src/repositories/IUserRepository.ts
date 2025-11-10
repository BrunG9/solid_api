import type { User } from "../modules/User.js";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>
}