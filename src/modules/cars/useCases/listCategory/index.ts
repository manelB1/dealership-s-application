
import { CategoriesRepository } from "../../repositories/implemantations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryControler } from "./ListCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoryControler(listCategoriesUseCase);


export { listCategoriesController };