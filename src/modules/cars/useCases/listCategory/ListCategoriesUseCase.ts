import { Category } from "../../model/Category";
import { IcategoriesRepository } from "../../repositories/IcategoriesRepository";




class ListCategoriesUseCase {

    constructor(private categoriesRepository: IcategoriesRepository) {

    }
    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }

}

export { ListCategoriesUseCase }