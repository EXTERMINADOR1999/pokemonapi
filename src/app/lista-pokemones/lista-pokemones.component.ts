import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-lista-pokemones',
  templateUrl: './lista-pokemones.component.html',
  styleUrls: ['./lista-pokemones.component.scss']
})
export class ListaPokemonesComponent implements OnInit {

  pokemones:any[] = []

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.allPokemones();
  }

  allPokemones(){
      this.dataService.getPokemon().subscribe((data:any)  =>{
        data.results.forEach(element => {
          this.dataService.getAllPokemon(element.name).subscribe((result: any) =>{
            this.pokemones.push(result);
            console.log(this.pokemones);
            
          }, error => {
            console.error('Error');
          });
        });
      }, error =>{
        console.error('Error');
      })
  }
}
