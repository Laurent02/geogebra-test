import { Component, OnInit } from '@angular/core';
import * as GGBApplet from 'deployggb';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var params = {
      appName: 'graphing',
      width: 800,
      height: 600,
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };
    var applet = new GGBApplet(params, true);
    window.addEventListener('load', function () {
      applet.inject('ggb-element');
    });
  }
}
