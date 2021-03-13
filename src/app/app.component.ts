import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'card10';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => console.log(event));
  }

  getHistory() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(async ({ urlAfterRedirects }: NavigationEnd) => {
        console.log(urlAfterRedirects);
      });
  }
}
