import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(@Inject(Http) public _ht) { }

  register(obj)
  {
    return this._ht.post("supins",obj)
  }
  login(obj)
  {
    return this._ht.post('login',obj)
  }
}
