import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Brand } from 'src/app/types/brand';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit{

  brands: Brand[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getBrands().subscribe((brands) => {
      console.log(brands);
      this.brands = brands;
      this.isLoading = false;
    });
  }

}
