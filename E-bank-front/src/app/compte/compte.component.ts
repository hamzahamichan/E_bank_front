import {Component, OnInit} from '@angular/core';
import {CompteService} from "../services/compte.service";

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit{
  compte :any;
  errorMessage! : String;
  constructor(private compteService:CompteService) {
  }

  ngOnInit(): void {
    const self = this; // Stockez la référence à 'this'
    this.compteService.getCompte().subscribe({
      next(data) {
        self.compte = data; // Utilisez 'self' au lieu de 'this'
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }



}
