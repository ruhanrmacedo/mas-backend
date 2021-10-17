
type userData = {
    name: string;
    email: string;
    password: string
}

class CreateUserService {

    public async execute({name,email,password}:userData) {

        const user = {
            name,
            email,
            password
        }

        return user;
    }
}

export {CreateUserService}