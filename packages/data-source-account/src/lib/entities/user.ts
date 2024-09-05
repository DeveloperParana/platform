import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role, User } from '@platform/domain-account';

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  phone: string;

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

  // @OneToMany(() => Presentation, (presentation) => presentation.user)
  // presentations: Presentation[];

  // @OneToMany(() => PresentationComment, (comment) => comment.user)
  // comments: PresentationComment[];

  // @OneToMany(() => PresentationLike, (like) => like.user)
  // likes: PresentationLike[];

  // @OneToMany(() => Event, (event) => event.user)
  // events: Event[];

  // @ManyToMany(() => RSVP, (rsvp) => rsvp.users)
  // @JoinTable()
  // rsvps: RSVP[];
}

// 44991422726
