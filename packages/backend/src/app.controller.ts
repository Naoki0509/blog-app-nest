import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post/post.service';

import { Post as PostModel } from 'database';

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Get('feed')
  async getAllPosts(): Promise<PostModel[]> {
    return this.postService.posts({});
  }

  @Post('post')
  async createDraft(@Body() postData: PostModel): Promise<PostModel> {
    return this.postService.createPost(postData);
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Put('publish/:id')
  async PublishdPost(
    @Param('id') id: string,
    @Body() postData: { title: string; content?: string },
  ): Promise<PostModel> {
    const { title, content } = postData;
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: {
        title,
        content,
      },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
