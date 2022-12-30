import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCateoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (resquest, response) => {
    const { name, description } = resquest.body;
    const createCategoryService = new CreateCateoryService(categoriesRepository);
    createCategoryService.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get("/", (_, response) => {
    const listCategories = categoriesRepository.list();

    return response.status(200).json({ listCategories })
})

export { categoriesRoutes };