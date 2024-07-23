import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthentificationService } from './shared/authentification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig
        , private layoutService: LayoutService
        , private translateService: TranslateService
        , private loginService: AuthentificationService) 
        {}

    ngOnInit() {
        this.translateService.setDefaultLang('es');
        this.translate('es');

        this.primengConfig.ripple = true;       //enables core ripple functionality

        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'lara-light-blue',          //default component theme for PrimeNG
            scale: 10                           //size of the body font size to scale the whole application
        };
    }

    translate(lang: string) {
        this.translateService.use(lang);
        this.translateService.get('calendar').subscribe(res => {
            this.primengConfig.setTranslation(res)
        });
    }
}
