import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../department.service";
import {Department} from "../_model/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  DEPARTMENT_ATTR: string[] = ["Code", "Name"];
  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }
}
