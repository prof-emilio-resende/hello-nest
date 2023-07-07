import { Injectable } from '@nestjs/common';
import { Role, User } from './users.model';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'emilio',
            password: 'resende',
            roles: [Role.Reader, Role.Writer],
        },
        {
            userId: 2,
            username: 'murta',
            password: 'murta',
            roles: [Role.Reader],
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
