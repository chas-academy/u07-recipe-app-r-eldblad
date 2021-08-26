import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../auth/token.service';
import { AuthStateService } from '../../auth/auth-state.service';
import { RecipeListService } from '../../shared/recipe-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean;
  title = 'Recipe App';

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {}

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
