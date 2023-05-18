import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Drug } from './drug.entity';
import { Pharmacy } from './pharmacy.entity';

@Entity('pharmacies_drugs')
export class PharmacyDrug {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pharmacyId: string;

  @Column()
  drugId: string;

  @Column({ type: 'integer' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => Drug, drug => drug.pharmaciesDrugs)
  public drug: Drug;

  @ManyToOne(() => Pharmacy, pharmacy => pharmacy.pharmaciesDrugs)
  public pharmacy: Pharmacy;
}
