import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  public currentRole: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentRole = localStorage.getItem('role');
    this.authService.getCurrentRole()
      .subscribe(
        role => {
          this.currentRole = role;
        }
      );
   }

  canActivate(): boolean {
    if (this.currentRole === 'Recruiter' || this.currentRole === 'Hiring Manager') {
      return true;
    } else {
      if (window.location.href.includes("all-candidate")) {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    }    
  }
}
