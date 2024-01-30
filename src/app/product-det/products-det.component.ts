import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-det',
  templateUrl: './products-det.component.html',
  styleUrls: ['./products-det.component.scss']
})
export class ProductsDetComponent implements OnInit {


  product_info:any;
  product_id:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){ }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.product_id = res.pid;
  
      this.api.product_by_id(this.product_id).subscribe(res=>{
        console.log(res);
        this.product_info = res;
      })
    });
  }

  
  addtocart()
  {
    if(localStorage.getItem('token'))
    {
      this.api.addtocart(this.product_id).subscribe(res=>{
      this.ngOnInit();
      });
    }
    else
    {
        this.route.navigate(['/login']);
    }
  }
}
