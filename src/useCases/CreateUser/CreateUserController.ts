import type { CreateUserUserCase } from "./CreateUserUseCase.js";
import type { Request, Response } from "express";

export class CreateUserController{
    constructor( 
        private createUserUseCase: CreateUserUserCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {name, email, password } = req.body
        try{

            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            return res.status(201).send()
        }
        catch(err: unknown){
            const message = err instanceof Error ? err.message : 'Unexpected error';
            return res.status(400).json({ message });
        }
    }
}