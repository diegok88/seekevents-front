import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cadeve } from '../../interface/cadeve.model';
import { CadeveService } from '../../service/cadeve.service';
import { RouterModule } from '@angular/router'; // Adicione esta importação

@Component({
  selector: 'app-listaevento',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione RouterModule aqui
  templateUrl: './listaevento.html',
  styleUrls: ['./listaevento.scss']
})
export class Listaevento implements OnInit {
  eventos: Cadeve[] = [];

  constructor(private cadeveService: CadeveService) { }

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.cadeveService.findAll().subscribe({
      next: (data: Cadeve[]) => {
        this.eventos = data.map(evento => ({
          ...evento,
          cevima: this.getImagePath(evento.cevima)
        }));
      },
      error: (err) => console.error(err)
    });
  }

  private getImagePath(imageName: string | undefined): string {
    if (!imageName) {
      return 'assets/images/default-event.jpg';
    }
    return `assets/imagem/eventos/${imageName}`;
  }

  viewEventDetails(eventId: number): void {
    console.log('Visualizar detalhes do evento:', eventId);
    console.log(this.eventos)
    // Implemente a navegação conforme necessário
    // Exemplo: this.router.navigate(['/evento', eventId]);
  }
}