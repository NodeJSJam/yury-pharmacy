import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Drug } from './drug.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  description: string;

  @OneToMany(() => Drug, drug => drug.brand, { nullable: true, cascade: true })
  drugs?: Drug[];
}
