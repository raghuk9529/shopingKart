import { Component, OnInit, Inject } from '@angular/core';
import { ToyService } from '../toy.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
data;
  constructor(@Inject(ToyService) public toy) { 
   
    this.toy.getToy().subscribe(dt=>{
      this.data=JSON.parse(dt._body);
      
    })
  }

  ngOnInit() {
  }

}
