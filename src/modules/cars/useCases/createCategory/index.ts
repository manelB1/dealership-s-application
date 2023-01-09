import { CategoriesRepository } from "../../repositories/implemantations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryControler";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController, createCategoryUseCase };