import {Component, Inject, OnInit} from '@angular/core';
import {WINDOW} from '../../../shared/helpers/window.helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window) { }

  ngOnInit() {
  }

  goToFacebook() {
    this.window.open('https://www.facebook.com/FEMOB-535441916992208/');
  }

  goToInstragam() {
    this.window.open('https://www.instagram.com/femob_');
  }

}
