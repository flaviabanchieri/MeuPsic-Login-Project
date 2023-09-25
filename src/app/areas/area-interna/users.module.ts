import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home';
import { CardAgendaSemanaComponent } from './home/card-agenda-semana/card-agenda-semana.component';
import { CardAnotacaoComponent } from './home/card-anotacao/card-anotacao.component';
import { CardAtendimentosNowComponent } from './home/card-atendimentos-now/card-atendimentos-now.component';
import { CardFinanceiroComponent } from './home/card-financeiro/card-financeiro.component';
import { UsersRoutingModule } from './users-routing.module';
import { PainelClientesComponent } from './clientes/painel-clientes/painel-clientes.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';
import { DadosClientesComponent } from './clientes/dados_clientes/dados-clientes.component';
import { MatTabsModule} from '@angular/material/tabs';
import { DadosClientesGeralComponent } from './clientes/dados_clientes/dados-clientes-geral/dados-clientes-geral.component';
import { FormsModule } from '@angular/forms';
import { DadosClientesAtendimentosComponent } from './clientes/dados_clientes/dados-clientes-atendimentos/dados-clientes-atendimentos.component';
import { DadosClientesFinanceiroComponent } from './clientes/dados_clientes/dados-clientes-financeiro/dados-clientes-financeiro.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CardAtendimentosNowComponent,
    HomeComponent,
    CardFinanceiroComponent,
    CardAnotacaoComponent,
    CardAgendaSemanaComponent,
    PainelClientesComponent,
    SidebarComponent,
    NavbarComponent,
    DadosClientesComponent,
    DadosClientesGeralComponent,
    DadosClientesAtendimentosComponent,
    DadosClientesFinanceiroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NgApexchartsModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
  ],
})
export class UsersModule {}
