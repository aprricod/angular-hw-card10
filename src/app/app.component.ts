import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavServiceService } from './nav-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'card10';

  constructor(private navigation: NavServiceService, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => console.log(event));
  }

  back(): void {
    this.navigation.back();
  }

  getHistory() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(async ({ urlAfterRedirects }: NavigationEnd) => {
        console.log(urlAfterRedirects);
      });
  }

  goToMainPage() {
    this.router.navigate(['/main']);
  }
}
