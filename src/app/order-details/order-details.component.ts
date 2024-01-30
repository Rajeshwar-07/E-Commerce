import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit
{

  orderdata:any;
  order_id:any;
  orderTotal:number = 0;
  sum:number = 0;
  constructor(private route:ActivatedRoute, private api:ApiService){ }
  ngOnInit() 
  {
     let i = this.route.params.subscribe((res:any)=>{
      console.log(res['order_id']);
      this.api.order_det(res['order_id']).subscribe(result=>{
        console.log(result);
        this.orderdata = result;
        this.orderTotal = res;
        this.getTotal(result);
      })
    });
  }


  getTotal(data:any)
  {
    let subs = 0;
    for(let item of data)
    {
      subs += item.price * item.qty;
      this.orderTotal = subs; 
    }
  }
}


