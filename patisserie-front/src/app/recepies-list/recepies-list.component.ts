import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Recepie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent {
  private backendUrl = 'http://localhost:3000/v1';
  public recepies!: [Recepie];
  constructor(private HttpClient: HttpClient) {}

  ngOnInit() {
    this.HttpClient.get<{recepies: [Recepie]}>(`${this.backendUrl}/recepies`).subscribe((res) => {
      this.recepies = res.recepies;
    })
  }
}
