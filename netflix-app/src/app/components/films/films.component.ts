import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../models/anime';


interface peliculas{
  titulo: string;
  imagen: string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent{
  @Input() peliculas = [
    {
      "titulo":'Ajin',
      "imagen":'.\assets\images\Anime\ajin.jpg',   
    },
    {
      "titulo":'El castillo ambulante',
      "imagen":'.\assets\images\Anime\castilloambulante.webp'       
    },
    {
      "titulo":'El viaje de Chihiro.webp',
      "imagen":'.\assets\images\Anime\chihiro.webp'
    }];
}
