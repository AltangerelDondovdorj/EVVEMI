import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireList} from 'angularfire2/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StudentComponent } from './client/student/student.component';
import { CourseComponent } from './client/course/course.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { StudentFormComponent } from './admin/student-form/student-form.component';
import { CourseService } from './service/course.service';
import { StudentService } from './service/student.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    NavbarComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: StudentComponent},
      { path: 'students', component: StudentComponent},
      { path: 'courses', component: CourseComponent},
      { path: 'admin/student/new', component: StudentFormComponent},
      { path: 'admin/student/:id', component: StudentFormComponent},
      { path: 'admin/student/delete/:id', component: StudentFormComponent},
    ])
  ],
  providers: [CourseService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
