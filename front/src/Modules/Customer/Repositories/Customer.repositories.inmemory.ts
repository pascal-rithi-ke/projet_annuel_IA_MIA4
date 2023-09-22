import { Customer } from "../Model/Customer.model";
import { ICustomerRepositories } from "../Port/Customer.port.repositories";

export class CustomerInMemoryRepositories implements ICustomerRepositories {
  getAll(): Promise<Customer[]> {
    return new Promise<Customer[]>((resolve) => {
      resolve(FakeCustomerData);
    });
  }
  getId(id: string): Promise<Customer> {
    return new Promise<Customer>((resolve) => {
      const customer = FakeCustomerData.find((customer) => customer.id === id);

      if (!customer) {
        throw new Error("Client introuvable");
      }
      resolve(customer);
    });
  }
  edit(customer: Customer): Promise<Customer> {
    return new Promise<Customer>((resolve) => {
      const customerToEdit = FakeCustomerData.find((r) => r.id === customer.id);

      if (customerToEdit) {
        customerToEdit.name = customer.name;
        customerToEdit.email = customer.email;
        customerToEdit.phone = customer.phone;
        customerToEdit.address = customer.address;
        customerToEdit.city = customer.city;
        customerToEdit.zipCode = customer.zipCode;
        customerToEdit.country = customer.country;

        resolve(customerToEdit);
      }
    });
  }
  delete(customerId: string): Promise<Customer> {
    return new Promise<Customer>((resolve) => {
      const customerToDelete = FakeCustomerData.find(
        (r) => r.id === customerId
      );

      if (customerToDelete) {
        FakeCustomerData.splice(FakeCustomerData.indexOf(customerToDelete), 1);

        resolve(customerToDelete);
      }
    });
  }
}

const FakeCustomerData: Customer[] = [
  {
    id: "1",
    name: "João",
    email: "João@yopmail.com",
    phone: "0612345678",
    address: "4 rue de la paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
  },
  {
    id: "2",
    name: "Luis",
    email: "Luis@yopmail.com",
    phone: "0612345678",
    address: "7 rue de la frite",
    city: "Bruxelles",
    zipCode: "9000",
    country: "Belgique",
  },
  {
    id: "3",
    name: "Maria",
    email: "Maria@yopmail.com",
    phone: "0612345678",
    address: "8 rue des champs",
    city: "Reims",
    zipCode: "51100",
    country: "France",
  },
];
