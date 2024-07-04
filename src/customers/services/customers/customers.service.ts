import { Customer } from 'src/customers/types/Customer';
import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danial8350@gmail.com',
      name: 'Asdf',
    },
    {
      id: 2,
      email: 'danial8351@gmail.com',
      name: 'Zxcv',
    },
    {
      id: 3,
      email: 'danial8352@gmail.com',
      name: 'Qwer',
    },
    {
      id: 4,
      email: 'danial8353@gmail.com',
      name: 'Poiu',
    },
    {
      id: 5,
      email: 'danial8354@gmail.com',
      name: 'Lkjh',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id == id);
  }

  CreateCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
  getCustomers() {
    return this.customers;
  }
}
