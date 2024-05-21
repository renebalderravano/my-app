import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Publication } from '../publication.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CurrencyPipe],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {
  @Input() publication!: Publication;

  constructor(private router: Router){

  }


  editar(){
    this.router.navigate(['/createpublication'],{state:this.publication})
  }
}
