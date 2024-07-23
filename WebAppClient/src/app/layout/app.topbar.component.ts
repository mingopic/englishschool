import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthentificationService } from '../shared/authentification.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    isMenuOpen = false;
    userName = localStorage.getItem('name');

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    constructor(private el: ElementRef,public layoutService: LayoutService, private authentificationService: AuthentificationService) { }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.el.nativeElement.contains(event.target)) {
        // Cerrar el menú si se hace clic fuera de él
        this.isMenuOpen = false;
        }
    }
    
    public logOut() {
        this.authentificationService.LogOut();
    }
}
