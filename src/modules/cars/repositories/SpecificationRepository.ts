import { Specification } from "../model/Specifications";
import { ICreateSpecificationDto, ISpecificationRepository } from "./ISpecificationsRepository";



class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDto): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        })

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)
        return specification
    }

    list(): Specification[] {
        return this.specifications;
    }
}

export { SpecificationRepository }