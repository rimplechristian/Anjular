import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  title="neosoft";
  imagePath="https://dummyimage.com/600x400/000/fff";
  bool=false;
  empNames:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  abc(){
    this.empNames=["Amit","anil","sunil"];
  }
}
