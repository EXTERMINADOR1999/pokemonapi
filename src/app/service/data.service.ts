import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = environment.url;
  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get<any>(`${this.url}?limit=150`);
  }
  getAllPokemon(name: string){
    return this.http.get<any>(`${this.url}/${name}`);
  }
}
