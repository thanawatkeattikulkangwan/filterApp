import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filterApp';
  categories : any = [];
  itemMem : any = [];
  searchValue : string = "";
  constructor(public httpClient: HttpClient){

  }
  ngOnInit() {
      this.getData();
  }
  
  getData(){
    this.httpClient.get('https://api.publicapis.org/categories')
    .subscribe((res) =>{
       this.itemMem = res;
       this.categories = this.itemMem;
    });
  }

 
}
