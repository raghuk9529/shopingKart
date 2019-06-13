import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MenService {

  constructor(@Inject(Http) public ht) { }
  getMens()
  {
    return this.ht.get("mensData")
  }
  getInfo(obj)
  {
    return this.ht.post("mensInfo",obj);
  }
}
