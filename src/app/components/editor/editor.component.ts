import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export declare function GGBApplet(params: any, boolean: boolean): void;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('windowObject') private window: Window
  ) {}

  ngOnInit() {
    var params = {
      appName: 'graphing',
      width: 800,
      height: 600,
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };

    console.log(this.window);

    var applet = new GGBApplet(params, true);
    this.window.addEventListener('load', function () {
      applet.inject('ggb-element');
    });
    console.log(applet);
  }
}
