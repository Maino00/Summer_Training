import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {
  courseForm: FormGroup;
  listData: any;
  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required]
    })
  }

  public addCourse(): void{
    this.listData.push(this.courseForm.value);
    this.courseForm.reset();
  }

  remove(item) {
    this.listData.forEach((value, index) => {
      if (value == item) {
        this.listData.splice(index, 1);
      }
    });
  }
  ngOnInit() {

  }
}
