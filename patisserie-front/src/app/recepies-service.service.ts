import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Recepie } from '../models/recepie.model';

@Injectable({
  providedIn: 'root',
})
export class RecepiesServiceService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllRecepies() {
    return this.http.get<{recepies: [Recepie]}>(`${this.API_URL}/v1/recepies`);
  }

  saveRecepie(newRecepie: {name: string, ingredients: any[], instructions: string[]}) {
    return this.http.post<any>(`${this.API_URL}/v1/recepies/add`, newRecepie)
  }

  getRecepieByID(recepieID: string) {
    return this.http.get<any>(`${this.API_URL}/v1/recepies/${recepieID}`)
  }

  updateRecepie(recepie: Recepie) {
    return this.http.put<any>(`${this.API_URL}/v1/recepies/${recepie._id}`, recepie)
  }

  deleteRecepie(id: string) {
    return this.http.delete<any>(`${this.API_URL}/v1/recepies/${id}`)
  }
}
