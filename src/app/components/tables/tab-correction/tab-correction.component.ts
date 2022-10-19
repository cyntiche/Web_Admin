import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-correction',
  templateUrl: './tab-correction.component.html',
})
export class TabCorrectionComponent implements OnInit {
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

