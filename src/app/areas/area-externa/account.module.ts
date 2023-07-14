import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AccountRoutingModule } from "./account-routing.module";
import { LayoutExternoComponent } from "./layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [
        LayoutExternoComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AccountModule { }
