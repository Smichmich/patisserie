import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recepie } from '../../models/recepie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-recepie',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule ],
  templateUrl: './edit-recepie.component.html',
  styleUrl: './edit-recepie.component.css'
})

export class EditRecepieComponent {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {  }
  recepieToEdit: Recepie | null = null;
  ingredientAmountToAdd: number = 0;
  ingredientNameToAdd: string = '';
  instructionToAdd: string = '';

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['recepieID'];
    this.http.get<Recepie[]>(`/v1/recepies/${id}`).subscribe((res) => {
      this.recepieToEdit = res[0];
    })
  }

  addIngredient() {
    this.recepieToEdit?.ingredients.push(
      {name: this.ingredientNameToAdd, amount: this.ingredientAmountToAdd}
    );
    this.ingredientAmountToAdd = 0;
    this.ingredientNameToAdd = '';
  }

  removeIngredient(index: number) {
    this.recepieToEdit?.ingredients.splice(index, 1);
  }

  addInstruction() {
    this.recepieToEdit?.instructions.push(
      this.instructionToAdd
    );
    this.instructionToAdd = '';
  }

  removeInstruction(index: number) {
    this.recepieToEdit?.instructions.splice(index, 1);
  }

  updateRecepie() {
    this.http.put<any>(`/v1/recepies/${this.recepieToEdit?._id}`, this.recepieToEdit).subscribe((res) => {
      this.router.navigate(['/recepies']);
    })
  }

  deleteRecepie() {
    this.http.delete<any>(`/v1/recepies/${this.recepieToEdit?._id}`).subscribe((res) => {
      this.router.navigate(['/recepies']);
    })
  }
}
