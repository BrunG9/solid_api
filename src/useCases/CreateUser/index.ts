import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider.js";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository.js";
import { CreateUserController } from "./CreateUserController.js";
import { CreateUserUserCase } from "./CreateUserUseCase.js";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()


const createUserUserCase = new CreateUserUserCase(
    postgresUsersRepository,
    mailTrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUserCase
)

export {createUserUserCase , createUserController}