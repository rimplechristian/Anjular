import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const URL="assets/filter.json";
    this.http.get(URL)
    .subscribe(res=>{
      console.log(res);
    })
  }

}
