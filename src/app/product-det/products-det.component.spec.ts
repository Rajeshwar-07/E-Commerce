import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetComponent } from './products-det.component';

describe('ProductsDetComponent', () => {
  let component: ProductsDetComponent;
  let fixture: ComponentFixture<ProductsDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
