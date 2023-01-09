import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implemantations/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';


const categoriesRoutes = Router();



categoriesRoutes.post("/", (resquest, response) => {
    return createCategoryController.handle(resquest, response);
})

categoriesRoutes.get("/", (request, response) => {

    return listCategoriesController.handle(request, response);
})

export { categoriesRoutes };