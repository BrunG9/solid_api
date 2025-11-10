import { User } from "../../modules/User.js";
import type { IUsersRepository } from "../../repositories/IUserRepository.js";
import type { ICreateUserRequestDTO } from "./CreateUserDTO.js";

export class CreateUserUserCase{
    constructor( 
        private usersRepository: IUsersRepository
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.usersRepository.save(user)
    }
}