import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.css']
})
export class BaitapComponent implements OnInit {

  id: string = '10';
  enable: boolean = false;
  check: boolean = false;
  color: string = 'red';
  listNumber: number [] = [1,2,3,4,5,6,7,8,9]

  onClick()
  {
    if(this.check == false)
    {
      this.check = true;
      this.id = '100';
      this.listNumber.push(10);
    }
    else if (this.check == true)
    {
      this.check = false;
      this.id = '10';
    }

    

  }

  onInput(event: Event)
  {
    this.id = (<HTMLInputElement>event.target).value;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
