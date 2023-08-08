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
import { PainelClientesComponent } from './clientes/painel_clientes/painel-clientes.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';


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
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        NgApexchartsModule,
        MatTableModule,

    ]
})
export class UsersModule { }
