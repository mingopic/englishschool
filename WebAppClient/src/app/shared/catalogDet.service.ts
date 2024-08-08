import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { catalogDet } from "../model/catalogDet";

@Injectable({
    providedIn: 'root'
  })

  export class catalogDetService {
    baseUrl = environment.baseUrl;
    
    constructor(private http: HttpClient) { }
  
    GetGetAllByCatId(catId: number) : Observable<catalogDet[]> {
      return this.http.get<catalogDet[]>(`${this.baseUrl}`+"/api/catalogDet/GetAllByCatId?catId="+catId)
    }
  }