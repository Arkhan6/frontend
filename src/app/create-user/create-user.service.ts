import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

import { RestResponse } from '../model/restResponse.model';
import { UserModel } from '../model/user.model';

@Injectable()
export class CreateUserService {

  constructor(private http:HttpClient) { }


  /**Método que valida los campos obligatorios
   * 
   * @param user 
   */
  public validate(user: UserModel):boolean{
    let isValid = true;
    if(!user.firstName || !user.firstSurname ||!user.address){
      isValid = false
    }
      
      return isValid;
  }
  public saveOrUpdate(user: UserModel):Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));
  }
}
