import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (resquest, response) => {
    const { name, description } = resquest.body;

    const category = {
        name, description,
        id: uuidv4(),
        created_at: new Date()
    }

    categories.push(category);


    response.status(201).json({ message: "Created Success" })
})

export { categoriesRoutes };