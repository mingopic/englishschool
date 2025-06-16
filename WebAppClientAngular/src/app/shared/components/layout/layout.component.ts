import { RouterOutlet } from '@angular/router';

import {BreakpointObserver, BreakpointState, MediaMatcher} from '@angular/cdk/layout';
import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthentificationService } from '../../../core/services/authentification.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, TableModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnDestroy, AfterViewInit  {
  @ViewChild('snav') public sidenav!: MatSidenav;
  private themeLinkElement: HTMLLinkElement;
  mobileQuery: MediaQueryList;

  isMobileScreen : boolean = false;
  showSpanMenu = false;

  private _mobileQueryListener: () => void;
  isLightTheme = true;

  isMenuOpen = false;
  userName = localStorage.getItem('name');

  constructor(public breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef, private authentificationService: AuthentificationService) {

    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    }

    this.mobileQuery.addListener(this._mobileQueryListener);

    this.themeLinkElement = document.createElement('link');
    this.themeLinkElement.rel = 'stylesheet';
    document.head.appendChild(this.themeLinkElement);
  }

  ngAfterViewInit() {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sidenav.open();
          this.isMobileScreen = false;
          this.showSpanMenu = false;
        } else {
          this.sidenav.close();
          this.isMobileScreen = true;
          this.showSpanMenu = true;
        }
      });

      // Forzar la verificación de cambios después de que el sidenav se abra o cierre
      this.cdr.detectChanges();
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleMenu() {
    if (!this.isMobileScreen) {
      this.showSpanMenu = !this.showSpanMenu;
    }
    else {
      this.sidenav.toggle();
    }
  }

  toggleMenuSession() {
      this.isMenuOpen = !this.isMenuOpen;
  }

  public logOut() {
    this.authentificationService.LogOut();
}
}
