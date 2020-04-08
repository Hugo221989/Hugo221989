import { Component, OnInit } from '@angular/core';
import { PlayServiceService } from 'src/app/play-service/play-service.service';
import { Opciones } from 'src/app/models/opciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-page-normal',
  templateUrl: './play-page-normal.page.html',
  styleUrls: ['./play-page-normal.page.scss'],
})
export class PlayPageNormalPage implements OnInit {

  datosInicio: string = '';
 /*  comenzar: boolean = false; */
  comenzar: boolean = true;
  finalizado: boolean = false;
  //Rotar Opciones
  cambio1: boolean = false;
  cambio2: boolean = false;

  //Controlar el click
  click: boolean = false;

  opcionesListInicial: Opciones[] = [];
  opcionesListFinal: Opciones[] = [];
  opcionActual: Opciones;

  texto1:string ;
  texto2:string ;

  constructor(public playService: PlayServiceService,
              private router: Router) {
    
   }

  ngOnInit() {

    this.setearVariablesInicio();
    this.obtenerListaOpcionesServicio();

  }

  obtenerListaOpcionesServicio(){
    
    this.playService.obtenerOpcionesNormal().subscribe( () =>{
      this.opcionesListInicial = this.playService.opciones;

      //ORDENAR RANDOM LA LISTA
      this.opcionesListInicial = this.shuffle(this.opcionesListInicial);
      this.opcionesListFinal = this.opcionesListInicial.slice(0, 11);

      this.obtenerElementoOpcion();
      this.texto1 = this.opcionActual.respuesta1;
      this.texto2 = this.opcionActual.respuesta2;
      this.contador();
    });

  }

  shuffle(arra1: Opciones[]) {
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
    return arra1;
}

  setearVariablesInicio(){
    this.datosInicio = '';
    /* this.comenzar = false; */
    this.comenzar = true;
    this.finalizado = false;
  }

  obtenerElementoOpcion(){

    if(this.opcionesListFinal.length > 0){
        this.opcionActual = this.opcionesListFinal[0];
        this.opcionesListFinal.splice(0, 1); 
    }

  }

  siguiente(){


    if(this.click == false){
      this.click = true;
      this.obtenerElementoOpcion();

      if(this.opcionesListFinal.length > 0){

        this.cambio1 = true;
        setTimeout(() => {
          this.texto1 = this.opcionActual.respuesta1;
        }, 1000);
        
        setTimeout(() => {
          this.cambio2 = true;
          setTimeout(() => {
            this.texto2 = this.opcionActual.respuesta2;
          }, 1000);
        }, 1500);

        //Ponemos las variables cambio a false de nuevo 
        setTimeout(() => {
          this.cambio1 = false;
          this.cambio2 = false;
          this.click = false;
        }, 4000);

      }else{
        this.comenzar = false;
        this.finalizado = true;
        this.click = false;
      }
  }

  }

  contador(){
    setTimeout( () => {
      this.datosInicio = '3'

      setTimeout( () => {
        this.datosInicio = '2'

        setTimeout( () => {
          this.datosInicio = '1'

          setTimeout( () => {
            this.datosInicio = 'Vamos!'

            setTimeout( () => {
              this.comenzar = true;
            }, 1500)
            
          }, 1500)

        }, 1500)

      }, 1500)

    }, 1000)
  }

  reiniciarNivel(){
    this.setearVariablesInicio();
    this.obtenerListaOpcionesServicio();
  }

  irMenuPrincipal(){
    this.setearVariablesInicio();
    this.obtenerListaOpcionesServicio();
    this.router.navigate(['/level']);
  }

}
