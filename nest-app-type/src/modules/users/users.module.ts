import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersProviders } from './users.providers';
import { DatabaseModule } from '../../database/db.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, ...UsersProviders],
    exports: [UsersService],
})
export class UsersModule { }