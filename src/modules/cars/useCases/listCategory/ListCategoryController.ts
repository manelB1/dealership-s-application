import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoryControler {
    constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const listCategories = this.ListCategoriesUseCase.execute()

        return response.status(200).json({ listCategories })
    }
}

export { ListCategoryControler }