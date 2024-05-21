import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {

   }
 

   saveHousingLocation(data: any):Observable<any> {

    return this.http.post('http://localhost:8080/housinglocation/save', data)

  }

  getAllHousingLocations():Observable<any> {

    return this.http.get('http://localhost:8080/housinglocation/findAll')

  }

  
  getHousingLocationById(id: number):Observable<any> {
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
    return this.http.get('http://localhost:8080/getHousingLocationById/'+id)
  }
}
