import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { PharmacyDrug } from './pharmacyDrug.entity';

@Entity('pharmacies')
export class Pharmacy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @OneToMany(() => PharmacyDrug, pharmacyDrug => pharmacyDrug.drug)
  public pharmaciesDrugs: PharmacyDrug[];

  // @ManyToMany(() => Drug, drug => drug.pharmacies)
  // @JoinTable({ name: 'pharmacies_drugs' })
  // drugs: Drug[];
}
