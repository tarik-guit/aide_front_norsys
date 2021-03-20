import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dailyevent',
  templateUrl: './dailyevent.component.html',
  styleUrls: ['./dailyevent.component.scss']
})
export class DailyeventComponent implements OnInit {

   dateeventactuel:Date=new  Date();
   nomevenement:string="Nom événement";
   description:string="Ceci est un texte descriptif de l'evenement,qui apporte des infomations supplementaires et qui decrit les differents champs renseigné lors de la creation...";
   incre:boolean=false;


  constructor() { }

  ngOnInit(): void {

  }

 lireplus(){
    if(this.incre){

      this.incre=false
    }
    else{

      this.incre=true;
    }
  }
}
