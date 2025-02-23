import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor( private router: Router) {}

  canActivate(): boolean {

      this.router.navigate(['/customers']);
      return false;

  }
}
