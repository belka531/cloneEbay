import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { User } from '../users/entity'

@Entity()
export default class Advertisement extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: false })
  title: string

  @Column('text', { nullable: false })
  description: string

  @Column('text', { nullable: false })
  picture: string

  @Column()
  price: number

  @Column()
  userId: number

  @ManyToOne(type => User, user => user.advertisements)
  user: User;


}