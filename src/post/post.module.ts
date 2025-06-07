import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostRepository } from './repositories/post.repository';
import { UpdatePostAuthorHandler } from './handlers/update-post-author.handler';
import { GetPostsByUserHandler } from './handlers/get-posts-by-user.handler';
import { CreatePostHandler } from './handlers/create-post.handler';
import { PostService } from './post.service';

@Module({
  imports: [CqrsModule],
  providers: [
    PostRepository,
    CreatePostHandler,
    GetPostsByUserHandler,
    UpdatePostAuthorHandler,
    PostService,
  ],
  controllers: [],
})
export class PostModule {}
