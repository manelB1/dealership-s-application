import { Specification } from "../model/Specifications";

interface ICreateSpecificationDto {
    name: string;
    description: string;

}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDto): void
    findByName(name: string): Specification

}

export { ISpecificationRepository, ICreateSpecificationDto }