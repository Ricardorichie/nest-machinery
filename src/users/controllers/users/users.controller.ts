import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'John', email: 'John mail' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'John',
        email: 'John mail',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: ['Hello boy'],
      },
    ];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
