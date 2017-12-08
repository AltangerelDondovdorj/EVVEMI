import { AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

import { StudentService } from '../../service/student.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: Student;
  isSuccess: boolean;
  id;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) {

      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.studentService.getStudent(this.id).valueChanges().subscribe(p => this.studentService.selectedStudent = p);
        console.log(studentService.selectedStudent);
      }
  }

  ngOnInit() {
    this.resetForm();
    this.isSuccess = false;
    if (this.studentService.selectedStudent) {
      this.studentForm = this.studentService.selectedStudent;
    }
  }

  onSubmit(form: NgForm) {
    if (this.id) {
      this.studentService.update(this.id, form.value);
    } else {
      this.studentService.insertStudent(form.value);
    }
    this.router.navigate(['/students']);
  }

  resetForm(form?: NgForm) {
   // form.reset();
    this.studentService.selectedStudent = {
      $key: '',
      name: '',
      email: '',
      phone: ''
    };
  }

}
