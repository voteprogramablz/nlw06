import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Insert a name to create a tag");
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name }); // precisa do await pois é uma promise (tem que esperar ir no DB, pesquisar e trazer o resultado);

    if (tagAlreadyExists) {
      throw new Error("Tag already exists.");
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
