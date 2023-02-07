import { Component } from '@angular/core';
import{ Accion} from '../../src/app/models/accion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'netflix-app';

  accion:Accion

  constructor(){}

}
