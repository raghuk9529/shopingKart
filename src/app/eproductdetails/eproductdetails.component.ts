import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectronicsService } from '../electronics.service';



@Component({
  selector: 'app-eproductdetails',
  templateUrl: './eproductdetails.component.html',
  styleUrls: ['./eproductdetails.component.css']
})
export class EproductdetailsComponent implements OnInit {
pid;info;ob;small;large;
  constructor(@Inject(ElectronicsService) public ht,@Inject(ActivatedRoute) public ar) { 
    this.ar.params.subscribe(dt=>{
      this.pid=(dt["proid"])
      var obj={pid:this.pid}
      
      this.ht.epDetails(obj).subscribe(dt=>{
        this.info=JSON.parse(dt._body)
        this.ob=(this.info[0].pimage);
        this.small='./assets/images/small/electronics/'+this.ob;
      
        this.large="./assets/images/large/electronics/"+this.ob;
      })
    });
    
  }
  ngOnInit() {
  }
  
  

}
