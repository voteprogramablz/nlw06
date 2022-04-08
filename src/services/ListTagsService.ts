import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { instanceToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find(); // retorna todas as tags

    return instanceToPlain(tags);
  }
}

export { ListTagsService };
