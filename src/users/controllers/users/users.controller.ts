import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log('request', request.body);
    response.send('Created');
  }
}
