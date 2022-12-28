import { CategoriesRepository } from "../repositories/CategoriesRepository";


interface Irequest {
    name: string;
    description: string;
}

class CreateCateoryService {
    constructor(private categoriesRepository: CategoriesRepository) {

    }
    execute({ name, description }: Irequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("category already exists")
        };
        this.categoriesRepository.create({ name, description })
    }

}

export { CreateCateoryService };