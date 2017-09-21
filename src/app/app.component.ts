import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public settings: Settings;
    localLang = localStorage.getItem('lang');

    constructor(public appSettings: AppSettings, public translate: TranslateService) {
        this.settings = this.appSettings.settings;

        if (this.localLang == null) {
          this.changeLang('es');
        } else {
          if (this.localLang === 'es') {
            this.changeLang('es');
          } else if (this.localLang === 'en') {
            this.changeLang('en');
          }
        }

    }

    changeLang(lang) {
      localStorage.setItem('lang', lang);
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
    }
}
