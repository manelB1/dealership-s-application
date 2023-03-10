import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implemantations/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body
    const CreatedSpecificationService = new CreateSpecificationService(specificationsRepository);
    CreatedSpecificationService.execute({ name, description })

    return response.status(200).send();
})

specificationsRoutes.get('/', (_, response) => {
    const listSpecifications = specificationsRepository.list();

    return response.status(200).json({ listSpecifications })
})

export { specificationsRoutes }