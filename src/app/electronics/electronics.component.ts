import { Component, Inject } from '@angular/core';
import { ElectronicsService } from '../electronics.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent{
ele;
  constructor(@Inject(ElectronicsService) public el)
   { 
      this.el.elecGet().subscribe(dt=>{
        //alert(dt._body);
     this.ele= JSON.parse(dt._body);
     
  })
}


}

