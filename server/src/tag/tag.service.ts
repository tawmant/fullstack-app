import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from '@app/tag/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  async getTags(): Promise<TagEntity[]> {
    return [{ id: 1, name: 'test' },{ id: 2, name: 'Azamat' }];
    // return await this.tagRepository.find();
  }
}
