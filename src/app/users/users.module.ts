import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CardAtendimentosNowComponent } from './home/card-atendimentos-now/card-atendimentos-now.component';
import { HomeComponent } from './home/home.component';
import { CardFinanceiroComponent } from './home/card-financeiro/card-financeiro.component';
import { CardAnotacaoComponent } from './home/card-anotacao/card-anotacao.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CardAgendaSemanaComponent } from './home/card-agenda-semana/card-agenda-semana.component';

@NgModule({
    declarations: [
        LayoutComponent,
        CardAtendimentosNowComponent,
        HomeComponent,
        CardFinanceiroComponent,
        CardAnotacaoComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        NgApexchartsModule,
        CardAgendaSemanaComponent
    ]
})
export class UsersModule { }
