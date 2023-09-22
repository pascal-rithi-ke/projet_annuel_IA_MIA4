import { Customer } from "../Model/Customer.model";

export interface ICustomerRepositories {
  getAll(): Promise<Customer[]>;
  getId(id: string): Promise<Customer>;
  edit(customer: Customer): Promise<Customer>;
  delete(customerId: string): Promise<Customer>;
}
