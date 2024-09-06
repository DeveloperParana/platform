import { Role, User } from '@platform/domain-account';
import { PresentationEntity } from './presentation';
import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PresentationCommentEntity } from './presentation-comment';
import { PresentationLikeEntity } from './presentation-like';

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false, default: '' })
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  minibio: string;

  @Column({
    type: 'enum',
    enum: ['member', 'leader', 'staff', 'heroe', 'speaker', 'director'],
    default: 'member',
  })
  roles: Role[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PresentationEntity, (presentation) => presentation.user)
  presentations: PresentationEntity[];

  @OneToMany(() => PresentationCommentEntity, (comment) => comment.user)
  comments: PresentationCommentEntity[];

  @OneToMany(() => PresentationLikeEntity, (like) => like.user)
  likes: PresentationLikeEntity[];

  // @OneToMany(() => Event, (event) => event.user)
  // events: Event[];

  // @ManyToMany(() => RSVP, (rsvp) => rsvp.users)
  // @JoinTable()
  // rsvps: RSVP[];
}

// 44991422726
