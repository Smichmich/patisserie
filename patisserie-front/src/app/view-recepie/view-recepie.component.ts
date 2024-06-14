import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Recepie } from '../../models/recepie.model';
import { FormsModule } from '@angular/forms';
import { RecepiesServiceService } from '../recepies-service.service';

@Component({
  selector: 'app-view-recepie',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './view-recepie.component.html',
  styleUrl: './view-recepie.component.css'
})
export class ViewRecepieComponent {

  recepie: Recepie | null = null;
  recepieBackup: Recepie | null = null;
  factor: number = 1;

  constructor(private activeRoute: ActivatedRoute, private recepieService: RecepiesServiceService) {}

  ngOnInit() {
    const recepieID = this.activeRoute.snapshot.params['recepieID'];
    this.recepieService.getRecepieByID(recepieID).subscribe(res => {
       this.recepie = res[0];
       this.recepieBackup = JSON.parse(JSON.stringify(this.recepie))
    })
  }

  multipleIngredients() {
    this.recepie?.ingredients.forEach(ingredient => {
      ingredient.amount = ingredient.amount * this.factor
    });
    this.factor=1
  }

  resetRecepie() {
    this.recepie = JSON.parse(JSON.stringify(this.recepieBackup))
  }
}
