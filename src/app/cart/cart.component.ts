import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  card_data:any;
  orderTotal:number = 0;
  constructor(private api:ApiService){}

  ngOnInit()  
  {
      this.api.cart_list().subscribe((res:any)=>{
        console.log(res);
        this.card_data = res;
        // if(this.card_data) this.getTotal(this.card_data);
        this.getTotal(res);
      })
  }

  incqty(product_econ_cart_id:any)
  {
      this.api.incqty(product_econ_cart_id).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
        this.getTotal(res);

      })
  }
  decqty(product_econ_cart_id:any)
  {
      this.api.decqty(product_econ_cart_id).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
        this.getTotal(res);
        
      })
  }
  removeProduct(product_econ_cart_id:any)
  {
      this.api.removeProduct(product_econ_cart_id).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
        this.getTotal(res);
      })
  }
  
  getTotal(data:any)
  {
    let subs = 0;
    for(const item of data)
    {
      subs += item.price * item.qty;
      this.orderTotal = subs; 
    }
  }

}
