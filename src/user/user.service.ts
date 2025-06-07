import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User } from './entities/user.entitiy';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';

@Injectable()
export class UserService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async createUser(id: string, name: string, email: string): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(name, email, id));
  }

  async getUsers(): Promise<User[]> {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
