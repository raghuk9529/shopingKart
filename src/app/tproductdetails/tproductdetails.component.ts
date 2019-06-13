import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToyService } from '../toy.service';

@Component({
  selector: 'app-tproductdetails',
  templateUrl: './tproductdetails.component.html',
  styleUrls: ['./tproductdetails.component.css']
})
export class TproductdetailsComponent implements OnInit {
tpid;info
  constructor(@Inject(ActivatedRoute) public _route,@Inject(ToyService) public toy) 
  {
    this._route.params.subscribe(dt=>{
      
      this.tpid=(dt['proid'])
      var obj={wpid:this.tpid}

      this.toy.toyInfo(obj).subscribe(dt=>{
        this.info=JSON.parse(dt._body)
        
      })
      
    })
   }

  ngOnInit() {
  }

}
