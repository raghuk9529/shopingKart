import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenService } from '../men.service';


@Component({
  selector: 'app-mens-product-details',
  templateUrl: './mens-product-details.component.html',
  styleUrls: ['./mens-product-details.component.css']
})
export class MensProductDetailsComponent implements OnInit {
mid;info;small;large;ob:string;
  constructor(@Inject(ActivatedRoute) public _router,@Inject(MenService) public ms) {
    this._router.params.subscribe(dt=>{
        this.mid=(dt["proid"])
        var obj={mid:this.mid}

        this.ms.getInfo(obj).subscribe(dt=>{
          this.info=JSON.parse(dt._body)
         this.ob= (this.info[0].pimage);
          console.log(this.ob)
          this.small='./assets/images/small/mens/'+this.ob;
          //alert(this.small)
          this.large="./assets/images/large/mens/"+this.ob;

        })
    })
}

  ngOnInit() {
  }

}
