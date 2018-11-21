import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Advertisement }from '../advertisements/entity'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: false })
  firstName: string

  @Column('text', { nullable: false })
  lastName: string

  @Column('text', { nullable: false })
  email: string

  @Column({ nullable: false })
  phoneNumber: number

  @OneToMany(type => Advertisement, advertisement => advertisement.user)
  advertisements: Advertisement[];
}

