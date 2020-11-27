import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-denmark',
  templateUrl: './denmark.component.html',
  styleUrls: ['./denmark.component.scss']
})
export class DenmarkComponent implements OnInit {
  public isActive = false;
  constructor() { }


  ngOnInit(): void {
  }


  onClick(): void {
    this.isActive = !this.isActive;
  }
}
