import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AurhResolver } from './auth/aurh.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile:join(process.cwd(),'src/shema.gql'),
      
    }),
    TaskModule,
    PrismaModule,
    UserModule,
    AuthModule
  ],
  providers: [AurhResolver],
})
export class AppModule {}
