import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Opciones } from '../models/opciones';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayServiceService implements OnInit{

  itemsCollectionOpciones: AngularFirestoreCollection<Opciones>;
  opciones: Opciones[] = [];

  constructor(private afs: AngularFirestore) { }

  ngOnInit(){
    this.obtenerOpcionesNormal();
  }

  obtenerOpcionesNormal(){
    this.itemsCollectionOpciones = this.afs.collection<Opciones>('opciones', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('categoria', '==', 'normal');
        return query;
    });
    return this.itemsCollectionOpciones.valueChanges().pipe(
      map((opcion: Opciones[]) => {
        this.opciones = opcion;
      })
    )
  }

}
