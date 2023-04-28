import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Brand } from './brand.entity';

@Entity('drugs')
export class Drug {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => Brand, brand => brand.drugs, { nullable: false })
  brand: Brand;

  @Column({ type: 'boolean', default: false, name: 'by_prescription' })
  byPrescription: boolean;

  @Column({ type: 'varchar', length: 255 })
  barcode: string;

  @Column({ type: 'varchar', length: 255 })
  manufacturer: string;
}
