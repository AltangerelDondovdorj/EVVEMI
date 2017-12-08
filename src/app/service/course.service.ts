import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CourseService {
  courses$: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {

  }

  getCourses() {
    this.courses$ = this.db.list('courses');
    console.log(this.courses$);
    return this.courses$;
  }

}
