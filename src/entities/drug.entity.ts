import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { Brand } from './brand.entity';
import { PharmacyDrug } from './pharmacyDrug.entity';
import { Pharmacy } from './pharmacy.entity';

@Entity('drugs')
export class Drug {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'boolean', default: false, name: 'by_prescription' })
  byPrescription: boolean;

  @Column({ type: 'varchar', length: 255 })
  barcode: string;

  @Column({ type: 'varchar', length: 255 })
  manufacturer: string;

  @ManyToOne(() => Brand, brand => brand.drugs, { nullable: false })
  brand: Brand;

  @OneToMany(() => PharmacyDrug, pharmacyDrug => pharmacyDrug.pharmacy)
  pharmaciesDrugs: PharmacyDrug[];

  // @ManyToMany(() => Pharmacy, pharmacy => pharmacy.drugs)
  // @JoinTable({ name: 'pharmacies_drugs' })
  // pharmacies: Pharmacy[];
}
