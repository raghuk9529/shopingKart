import { Component, OnInit ,Inject} from '@angular/core';

import { MenService } from '../men.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
mensData;
  constructor(@Inject(MenService) public ms) { 
    this.ms.getMens().subscribe(dt=>{
      this.mensData=JSON.parse(dt._body);
    });
  }

  ngOnInit() {
  }

}
