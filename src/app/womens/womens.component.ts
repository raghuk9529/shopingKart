import { Component, OnInit,Inject } from '@angular/core';
import { WomenService } from '../women.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {
data;
  constructor(@Inject(WomenService) public ws) { 
    this.ws.womensData().subscribe(dt=>{
     
      this.data=JSON.parse(dt._body)
    })
  }

  ngOnInit() {
  }

}
