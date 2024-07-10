import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { Request, Response } from 'express';
import { CustomersService } from './../../services/customers/customers.service';

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}

  @Get(':id') //경로설정
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //console.log(typeof id);
    const customer = this.CustomersService.findCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'Customer not found!' });
    }
  }
  @Get('search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.CustomersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
  }

  @Get('')
  getAllCustomers() {
    return this.CustomersService.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() CreateCustomerDto: CreateCustomerDto) {
    //console.log(CreateCustomerDto);
    this.CustomersService.CreateCustomer(CreateCustomerDto);
  }
}
