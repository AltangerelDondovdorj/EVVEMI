import { Student } from './../model/student';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class StudentService {
  selectedStudent;
  studentList: AngularFireList<Student>;

  constructor(private db: AngularFireDatabase) {
    this.studentList = this.db.list('students');
  }

  getStudents() {
    this.studentList = this.db.list('students');
    return this.studentList;
  }

  insertStudent(student: Student) {
    this.studentList.push(student);
  }

  update (id, student) {
    return this.db.object('/students/' + id).update(student);
  }

  delete (id) {
    return this.db.object('/students/' + id).remove();
  }

  getStudent(productId) {
    return this.db.object('/students/' + productId);
  }
}
