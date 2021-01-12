import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private rout:ActivatedRoute) 
  {
    this.rout.params.subscribe(param=>{
      console.log("Ruta padre");
console.log(param);
    });
   }

  ngOnInit(): void {
  }

}
