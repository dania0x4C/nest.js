import { createVehicleErrors } from 'aws-sdk/clients/iotfleetwise';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  // database를 참고 해서 만드는 것이 좋다
  @IsEmail()
  email: string;
  @IsNumberString()
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address: createVehicleErrors;
}
