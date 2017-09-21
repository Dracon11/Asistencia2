import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent {

  router: Router;

  constructor(router: Router) {
      this.router = router;
  }

  searchResult(): void {
    console.log('Buscar');
     this.router.navigate(['pages/search']);
  }

// tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
      document.getElementById('preloader').classList.add('hide');
  }

}
