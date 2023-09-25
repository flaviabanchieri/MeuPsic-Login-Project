import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { AccountService } from '@app/services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user?: User | null;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }



}
