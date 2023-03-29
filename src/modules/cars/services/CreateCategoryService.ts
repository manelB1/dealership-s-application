
import { IcategoriesRepository } from "../repositories/IcategoriesRepository";


interface Irequest {
    name: string;
    description: string;
}

class CreateCateoryService {
    constructor(private categoriesRepository: IcategoriesRepository) {

    }
    execute({ name, description }: Irequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        console.log(categoryAlreadyExists);
        

        if (categoryAlreadyExists) {
            throw new Error("category already exists")
        };
        this.categoriesRepository.create({ name, description })
    }

}

export { CreateCateoryService };