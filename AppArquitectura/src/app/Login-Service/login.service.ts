import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  nombre:BehaviorSubject<string> = new BehaviorSubject('');
  
  private isLogged:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false);


  //NOMBRE USUARIO
  get getNombre(){
    return  this.nombre.asObservable();
  }

  set setNombre(nombre: string){
    this.nombre.next(nombre)
  }


  //LOGIN
   getIsLogged(){
    return this.isLogged.asObservable();
  }

  set SetIsLogged(value:boolean){
     this.isLogged.next(value);
  }


  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
  
  userIsLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  setUserIsLogged(isLogged: boolean): void {
    this.isLoggedSubject.next(isLogged);
  }

}
