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

  savedata()
  {
    //collect and save data fromm inputs
  }
}
