import {
  Entity,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user';
import { PresentationEntity } from './presentation';
import { PresentationLike } from '@platform/domain-account';

@Entity()
export class PresentationLikeEntity implements PresentationLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.likes)
  user: UserEntity;

  @ManyToOne(() => PresentationEntity, (presentation) => presentation.likes)
  presentation: PresentationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
