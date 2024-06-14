import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recepie } from '../../models/recepie.model';
import { RouterModule } from '@angular/router';
import { RecepiesServiceService } from '../recepies-service.service';

@Component({
  selector: 'app-recepies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent {
  public recepies!: [Recepie];
  constructor(private recepiesService: RecepiesServiceService) {}

  ngOnInit() {
    this.recepiesService.getAllRecepies().subscribe(res => {
      this.recepies = res.recepies;
    })
  }
}
