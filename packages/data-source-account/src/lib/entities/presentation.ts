import { PresentationCommentEntity } from './presentation-comment';
import { PresentationLikeEntity } from './presentation-like';
import { Presentation } from '@platform/domain-account';
import { UserEntity } from './user';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PresentationEntity implements Presentation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ unique: true })
  file: string;

  @Column({ nullable: false })
  cover: string;

  @ManyToOne(() => UserEntity, (user) => user.presentations)
  user: UserEntity;

  @OneToMany(() => PresentationCommentEntity, (comment) => comment.presentation)
  comments: PresentationCommentEntity[];

  @OneToMany(() => PresentationLikeEntity, (like) => like.presentation)
  likes: PresentationLikeEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
