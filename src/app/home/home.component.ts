import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{
  slider_data:any;
  category_data:any;
  best_seller_products:any;
  brand_partners:any;
  loading:any = true;

  constructor(private api:ApiService){}
  ngOnInit()
  {
    this.api.getSliderList().subscribe((res)=>{
      console.log(res);
      this.slider_data = res;
    });


    this.api.getCategoryList().subscribe((res)=>{
      console.log(res);
      this.category_data = res;
    });
    
   this.api.getProductList().subscribe((res)=>{
    console.log(res);
    this.best_seller_products = res;
    this.loading = false;
   })
      

    this.brand_partners = [
      {'img':'/assets/images/brand-1.jpg'},
      {'img':'/assets/images/brand-2.jpg'},
      {'img':'/assets/images/brand-3.jpg'},
      {'img':'/assets/images/brand-4.jpg'},
      {'img':'/assets/images/brand-5.jpg'}
    ]
  }
}
