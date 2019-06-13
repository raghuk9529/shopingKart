import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WomenService } from '../women.service';

@Component({
  selector: 'app-w-product-details',
  templateUrl: './w-product-details.component.html',
  styleUrls: ['./w-product-details.component.css']
})
export class WProductDetailsComponent implements OnInit {
wpid;info;
  constructor(@Inject(ActivatedRoute) public _route,@Inject(WomenService) public ws) { 
    this._route.params.subscribe(dt=>{
     
      this.wpid=(dt["proid"])
      var obj={wpid:this.wpid}

      this.ws.getWomen(obj).subscribe(dt=>{
        this.info=JSON.parse(dt._body);
       })
    })
  }

  ngOnInit() {
  }

}
