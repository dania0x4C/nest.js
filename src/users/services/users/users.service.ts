import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from '../../Types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'a',
      password: '1',
    },
    {
      username: 'b',
      password: '2',
    },
    {
      username: 'c',
      password: '3',
    },
    {
      username: 'd',
      password: '4',
    },
    {
      username: 'e',
      password: '5',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user)); //plainToClass(SerializedUser, user));
  }
  getUserByUsername(username: string) {
    return this.users.find((users) => users.username === username);
  }
}
