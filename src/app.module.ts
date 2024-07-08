import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/schema/user.schema';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/mydatabase'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
