import { getRepository } from 'typeorm';
import { User } from "../models/User"

interface UserData {
    id?:string
}

class GetUserService {
    public async execute(data:UserData): Promise<User | {}> {
        const{id} = data;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({id});

        if(!user){
            return {
                message:"user not found"
            }
        }

        return {
            id:user.id,
            name:user.name,
            email:user.email
        };
    }
}

export {GetUserService}