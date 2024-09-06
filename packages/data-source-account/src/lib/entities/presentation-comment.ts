import {
  Entity,
  Column,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user';
import { PresentationEntity } from './presentation';
import { PresentationComment } from '@platform/domain-account';

@Entity()
export class PresentationCommentEntity implements PresentationComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity;

  @ManyToOne(() => PresentationEntity, (presentation) => presentation.comments)
  presentation: PresentationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
