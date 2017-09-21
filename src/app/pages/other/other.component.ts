import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OtherComponent implements OnInit {
    constructor(public router: Router) { }

    ngOnInit() { }

}
