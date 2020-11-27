import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    AuthModule,

    MongooseModule.forRoot('mongodb+srv://studio141:caiojadypedro@cluster0.ztuib.gcp.mongodb.net/Ecommerce?retryWrites=true&w=majority'),
    TasksModule,
    UsersModule],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule { }
