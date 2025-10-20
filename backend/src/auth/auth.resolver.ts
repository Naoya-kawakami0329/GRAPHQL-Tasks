import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signIn.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { SignInResponse } from './dto/signInResponce';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService:AuthService){}

    @Mutation(()=>SignInResponse)
    @UseGuards(GqlAuthGuard)
    async signIn(
        @Args('signInInput') signInInput: SignInInput,
        @Context() context: any,
    ): Promise<SignInResponse> {
        return await this.authService.singIn(context.req.user);
    }
}
