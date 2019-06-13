import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {

  constructor(@Inject(Http) public htt) { }
    elecGet()
    {
      return this.htt.get("getData");
    }
   epDetails(obj)
   {
     return this.htt.post("getInfo",obj)
   }
}
