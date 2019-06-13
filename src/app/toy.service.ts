import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  constructor(@Inject(Http) public ht) { }

  getToy()
  {
    return this.ht.get("/toyData")
  }
  toyInfo(obj)
  {
    return this.ht.post("/tData",obj);
  }
}
