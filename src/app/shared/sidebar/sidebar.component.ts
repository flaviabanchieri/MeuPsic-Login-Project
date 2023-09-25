import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { AccountService } from '@app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
  }

  user?: User | null;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
}

}
