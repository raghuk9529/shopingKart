import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(@Inject(Http) public ht) { }
  getSports()
  {
    return this.ht.get("sportsInfo")
  }
}
