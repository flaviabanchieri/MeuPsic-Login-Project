import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers';


const accountModule = () => import('./areas/area-externa/account.module').then(x => x.AccountModule);
const usersModule = () => import('./areas/area-interna/users.module').then(x => x.UsersModule);

const routes: Routes = [
    /* { path: '', component: LayoutComponent, canActivate: [AuthGuard] }, */
    { path: '', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
