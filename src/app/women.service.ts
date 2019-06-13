import { Injectable,Inject} from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WomenService {

  constructor(@Inject(Http) public ht) { }
  womensData()
  {
    return this.ht.get("/womensData")
  }
  getWomen(obj)
  {
    return this.ht.post("wpd",obj)
  }
}
