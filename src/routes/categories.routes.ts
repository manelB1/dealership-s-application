import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory';


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (resquest, response) => {
    return createCategoryController.handle(resquest, response);
})

categoriesRoutes.get("/", (_, response) => {
    const listCategories = categoriesRepository.list();

    return response.status(200).json({ listCategories })
})

export { categoriesRoutes };