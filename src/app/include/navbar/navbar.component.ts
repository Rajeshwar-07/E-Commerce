import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  isLogin = false;
  catlist :any;
  cart_count:number=0;
  constructor(private router:Router,private api:ApiService)
  {
    if(localStorage.getItem('token'))
    this.isLogin = true;
  }
  ngOnInit()  
  {
      this.api.getCategoryList().subscribe((res:any)=>{
       this.catlist = res;
      });
      this.api.cart_list().subscribe((res:any)=>{
        this.cart_count = res.length; 

      })
  }
  logout()
  {
    if(confirm('Are you sure...?'))
    {
      localStorage.clear();
      this.router.navigate(['login']);
    }
  }
}

