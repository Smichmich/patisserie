import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Recepie } from '../../models/recepie.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recepies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent {
  public recepies!: [Recepie];
  constructor(private HttpClient: HttpClient) {}

  ngOnInit() {
    this.HttpClient.get<{recepies: [Recepie]}>(`/v1/recepies`).subscribe((res) => {
      this.recepies = res.recepies;
    })
  }
}
