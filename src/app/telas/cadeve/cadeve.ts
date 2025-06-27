import { Component, OnInit } from "@angular/core";
import { CadeveService } from "../../service/cadeve.service";
import { Cadeve } from "../../interface/cadeve.model";
import { Cateve } from "../../interface/cateve.model";
import { Tabdiv } from "../../interface/tabdiv.model";
import { Forpag } from "../../interface/forpag.model";
import { CateveService } from "../../service/cateve.service";
import { TabdivService } from "../../service/tabdiv.service";
import { ForpagService } from "../../service/forpag.service";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-cadeve',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadeve.html',
  styleUrl: './cadeve.scss'
})
export class CadastroEvento implements OnInit {
  selectedFile: File | null = null;
  categoria: Cateve[] = [];
  divulgacao: Tabdiv[] = [];
  pagamento: Forpag[] = [];

  evento: Cadeve = {
    cevnom: '',
    cevdes: '',
    cevdat: new Date(),
    cevcae: 0,
    cevtad: 0,
    cevfpa: 0,
    cevcdu: 0,
    cevima: '',
    cevsta: 'ATIVO'
  }

  constructor(
    private cadeveService: CadeveService,
    private cateveService: CateveService,
    private tabdivService: TabdivService,
    private forpagService: ForpagService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.authStatus$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      } else {
        this.carregarCategoria();
        this.carregarDivulgacao();
        this.carregarPagamento()
        this.obterUsuarioLogado();
      }
    });
  }

  carregarCategoria() {
    this.cateveService.listarcategoria().subscribe({
      next: (data: Cateve[]) => {
        this.categoria = data;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  carregarDivulgacao() {
    this.tabdivService.listardivulgacao().subscribe({
      next: (data: Tabdiv[]) => {
        this.divulgacao = data;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  carregarPagamento() {
    this.forpagService.listarpagamento().subscribe({
      next: (data: Forpag[]) => {
        this.pagamento = data;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  obterUsuarioLogado() {
    const usuario = this.authService.getUsuarioLogado();
    if (usuario) {
      this.evento.cevcdu = usuario.cduide || 0;
    } else {
      this.router.navigate(['/login']);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.evento.cevima = this.selectedFile.name;
    }
  }

 salvar() {
  const dadosParaEnviar: Cadeve = {
    ...this.evento,
    cevdat: new Date(this.evento.cevdat) 
  };

  this.cadeveService.createCadeve(dadosParaEnviar).subscribe({
    next: () => this.router.navigate(['/principal']),
    error: (err) => console.error('Erro ao salvar:', err)
  });
}
}
