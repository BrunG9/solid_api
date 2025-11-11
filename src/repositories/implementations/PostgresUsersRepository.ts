import type { User } from "../../modules/User.js";
import type { IUsersRepository } from "../IUserRepository.js";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = []

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }

}