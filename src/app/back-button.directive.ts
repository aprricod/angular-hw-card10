import { Directive, HostListener } from '@angular/core';
import { NavServiceService } from './nav-service.service';

@Directive({
  selector: '[appBackButton]',
})
export class BackButtonDirective {
  constructor(private navigation: NavServiceService) {}

  @HostListener('click')
  onClick(): void {
    this.navigation.back();
  }
}
