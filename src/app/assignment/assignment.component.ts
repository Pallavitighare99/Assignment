import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  boldText = "normal";
  fontSize = 16;
  italicText ="normal";
  bgColor = "white";
  
  constructor() { }

  ngOnInit(): void {
  }

  bold() {
    this.boldText = this.boldText == "bold" ? "normal" : "bold";

  }
  italic() {
    this.italicText = this.italicText == "italic" ? "normal" : "italic";
  }
  color() {
    this.bgColor = this.bgColor == "red" ? "white" : "red";
  }
  sizeSmall() {
    this.fontSize = ( this.fontSize - 1);
  }
  sizeGreat() {
    this.fontSize = ( this.fontSize + 1 ) ;
  }
  clear() {
  this.boldText = "normal";
  this.fontSize= 16;
  this.italicText="normal";
  this.bgColor = "white";
  }

}
