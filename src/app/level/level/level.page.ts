import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  accederNivel(nivel: number){
    if(nivel == 2){
      this.router.navigate(['/play-page']);
    }else{
      this.router.navigate(['/play-page-normal']);
    }
    
  }

}
