import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-school',
  templateUrl: './tab-school.component.html',
})
export class TabSchoolComponent implements OnInit {
  color: any;

  constructor() { }

  ngOnInit(): void {
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  showdrop1 = false;
  showdrop5 = false;
  toggledrop1(n:number){
    if(n==1) { this.showdrop1 = !this.showdrop1; }
    if(n==5) { this.showdrop5 = !this.showdrop5; }
  }

  savedata()
  {
    //collect and save data fromm inputs
  }
}
