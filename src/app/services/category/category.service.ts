import { Category } from './../../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getAllCategoryURL = 'http://localhost:8090/api/categories'
  constructor(private http: HttpClient) { }
  
 getAllCategories(){
   return this.http.get(this.getAllCategoryURL)
   .pipe(
     map(result=>{
      return<Category[]>result['categories']
   })
   )
 }
}   
