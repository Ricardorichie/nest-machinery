import { Controller, Get } from '@nestjs/common';

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
}
