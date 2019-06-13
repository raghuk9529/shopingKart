import { Component, OnInit, Inject } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(@Inject(SportsService) public sp) { 
    this.sp.getSports().subscribe(dt=>{
      alert(dt._body);
    });
  }

  ngOnInit() {
  }

}
