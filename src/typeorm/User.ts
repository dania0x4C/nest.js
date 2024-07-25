import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_address', // 여기는 database에 보이는 이름
    nullable: false, // 공백 설정
    default: '', //  기본 값 설정
  })
  emailAddress: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
