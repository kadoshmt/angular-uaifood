import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  route: ActivatedRoute;

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    this.route = activatedRoute;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if(params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBtSearchTerm(params.searchTerm)
      }else{
        this.foods = this.foodService.getAll();
      }
    });

  }
}
