import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empData:any=[
    {name:"A",age:23,city:"noida"},
    {name:"B",age:33,city:"pune"},
    {name:"C",age:43,city:"delhi"},
    {name:"D",age:53,city:"noida"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
