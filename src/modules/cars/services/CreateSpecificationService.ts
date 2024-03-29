import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {

    }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name)
        console.log(specificationAlreadyExists);
        
        if (specificationAlreadyExists) {
            throw new Error(`Specification  already exists`);
        }
        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationService, IRequest }