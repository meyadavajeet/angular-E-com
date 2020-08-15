import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
// declare empty array for categories
categories : Category[] = [];

  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    // collect all categories on pageload
    this.collectAllCategories();
  }
  
  collectAllCategories(){
    this.categoryService.getAllCategories()
    .subscribe(
      {
        next : (categories) =>{
          this.categories = categories;
          console.log(categories);
          console.warn("something happend");
          
          
        },
        error : (response : HttpErrorResponse) => {
          console.warn(response);
          
        }
      }
    )
  }

  selectedCategory(category_id : string){
    console.log(category_id);
    
  }
}
