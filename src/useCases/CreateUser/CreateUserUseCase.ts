import { User } from "../../modules/User.js";
import type { IMailProvider } from "../../providers/IMailProvider.js";
import type { IUsersRepository } from "../../repositories/IUserRepository.js";
import type { ICreateUserRequestDTO } from "./CreateUserDTO.js";

export class CreateUserUserCase{
    constructor( 
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.usersRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Eqp Caos',
                email: 'bruno@email.com'
            },
            subject: 'Seja bem vindo a plataforma',
            body: '<p>Você está cadastrado, espero que aproveite bastante nossas funcionalidades</p>'
        })
    }
}