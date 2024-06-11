import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Recepie } from '../../models/recepie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-recepie',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './edit-recepie.component.html',
  styleUrl: './edit-recepie.component.css'
})

export class EditRecepieComponent {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {  }
  recepieToEdit: Recepie | null = null;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['recepieID'];
    this.http.get<Recepie[]>(`/v1/recepies/${id}`).subscribe((res) => {
      this.recepieToEdit = res[0];
    })
  }
}
