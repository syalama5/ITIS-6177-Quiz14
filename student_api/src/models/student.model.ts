import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  StudentId?: number;

  @property({
    type: 'string',
    required: true,
  })
  StudentName: string;

  @property({
    type: 'string',
    required: true,
  })
  degree: string;

  @property({
    type: 'string',
    required: true,
  })
  courseName: string;


  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
