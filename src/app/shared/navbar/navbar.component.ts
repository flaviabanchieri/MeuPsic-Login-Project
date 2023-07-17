import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { AccountService } from '@app/services';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user?: User | null;
  search = faSearch

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }



}
