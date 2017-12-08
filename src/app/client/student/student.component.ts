import { StudentService } from './../../service/student.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Student } from '../../model/student';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: Student[];

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    var x = this.studentService.getStudents();
    x.snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.studentList.push(y as Student);
      });
    });
  }

  onSubmit(form: NgForm) {
    this.studentService.insertStudent(form.value);
  }

  delete(id) {
    if (!confirm('Are you sure want to delete this student?')) {
      return;
    }

    this.studentService.delete(id);
  }

}
