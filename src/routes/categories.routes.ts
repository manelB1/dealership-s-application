import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';
import { CreateCateoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (resquest, response) => {
    const { name, description } = resquest.body;
    const createCategoryService = new CreateCateoryService(categoriesRepository);
    createCategoryService.execute({ name, description })
    response.status(201).send()
})

categoriesRoutes.get("/", (_, response) => {
    const listCategories = categoriesRepository.list();

    return response.status(200).json({ listCategories })
})

export { categoriesRoutes };