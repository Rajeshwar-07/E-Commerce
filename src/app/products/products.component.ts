import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cat_id:any = 0;
  plist:any;
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService)
  {
    this.activatedRoute.params.subscribe((res:any)=>{
      console.log(res);
      this.cat_id = res.cat_id;

      this.api.products_by_cat_id(this.cat_id).subscribe((result:any)=>{
        console.log(result);
        this.plist = result;
      });
    });
  }
}
