import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (resquest, response) => {
    const { name, description } = resquest.body;
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({
            message: "Category already exists",
        });
    }

    categoriesRepository.create({ name, description })
    response.status(201).send()
})

categoriesRoutes.get("/", (_, response) => {
    const listCategories = categoriesRepository.list();

    return response.status(200).json({ listCategories })
})

export { categoriesRoutes };