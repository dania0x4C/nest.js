import { CreateUserDto } from './../../dto/CreateUser.dto';
// import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from '../../Types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user)); //plainToClass(SerializedUser, user));
  }
  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findOneUser(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id });
  }
}
