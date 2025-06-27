import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { PopupCadastro } from '../popup-cadastro/popup-cadastro';
import { Listaevento } from '../listaevento/listaevento';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PopupCadastro, Listaevento],
  templateUrl: './principal.html',
  styleUrls: ['./principal.scss']
})
export class Principal implements OnInit {
  usuariologado: string = '';
  perfillogado: number = 0;
  showLoginOverlay = false;
  @ViewChild('footerElement') footerElement!: ElementRef<HTMLElement>;

  // Dados de exemplo para eventos
  events = [
    {
      id: 1,
      nome: 'Festival de Verão',
      descricao: 'O maior festival de música do ano',
      data: '15/12/2023',
      imagem: 'assets/imagem/Evento01.jpg'
    },
    {
      id: 2,
      nome: 'Feira de Tecnologia',
      descricao: 'As últimas inovações em TI',
      data: '20/01/2024',
      imagem: 'assets/imagem/Evento03.jpg'
    },
    {
      id: 3,
      nome: 'Workshop de Gastronomia',
      descricao: 'Aprenda com chefs renomados',
      data: '05/02/2024',
      imagem: 'assets/imagem/Evento02.jpg'
    }
  ];

  // Categorias disponíveis
  categories = [
    { nome: 'Música', icon: 'bi-music-note-beamed' },
    { nome: 'Games', icon: 'bi-controller' },
    { nome: 'Palestras', icon: 'bi-lightbulb' },
    { nome: 'Arte', icon: 'bi-brush' },
    { nome: 'Networking', icon: 'bi-people' },
    { nome: 'Gastronomia', icon: 'bi-cup-hot' }
  ];

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verificarAutenticacao();
    this.carregarUsuarioLogado();
  }

  private verificarAutenticacao(): void {
    this.authService.authStatus$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });
  }

  private carregarUsuarioLogado(): void {
    const usuario = this.authService.getUsuarioLogado();
    if (usuario) {
      this.usuariologado = usuario.cdunom;
      this.perfillogado = usuario.cduper;
    } else {
      console.error('Nenhum usuário logado encontrado!');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  cadastroEvento(): void {
    this.router.navigate(['/cadeve']);
  }

  filterByCategory(category: string): void {
    console.log('Filtrando por:', category);
    // Implementação futura de filtro
  }

  viewEventDetails(eventId: number): void {
    this.router.navigate(['/evento', eventId]);
  }

  scrollToFooter(): void {
    if (this.footerElement) {
      this.footerElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleLoginOverlay(): void {
    this.showLoginOverlay = !this.showLoginOverlay;
  }

  // Método para navegação
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}