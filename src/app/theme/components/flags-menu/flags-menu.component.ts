import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-flags-menu',
  templateUrl: './flags-menu.component.html',
  styleUrls: ['./flags-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlagsMenuComponent implements OnInit {

  iconActive: string;
  localLang = localStorage.getItem('lang');
  public settings: Settings;
  constructor(public translate: TranslateService, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if (this.localLang == null) {
      this.iconActive = 'flag-icon-es';
    } else {
      if (this.localLang === 'es') {
        this.iconActive = 'flag-icon-es';
      } else if (this.localLang === 'en') {
        this.iconActive = 'flag-icon-us';
      }
    }
  }

  changeLang(lang) {
    if (lang === 'es') {
      this.iconActive = 'flag-icon-es';
      this.translate.setDefaultLang('es');
      this.translate.use('es');
      this.settings.theme.lang = 'es';
      localStorage.setItem('lang', 'es');
      location.reload();
    } else {
      this.iconActive = 'flag-icon-us';
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.settings.theme.lang = 'en';
      localStorage.setItem('lang', 'en');
      location.reload();
    }
    // this.getMenu(this.menuService.menuItems);
  }

}
