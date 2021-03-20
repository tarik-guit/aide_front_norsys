

export class Personnage{

  films:any=[];
  nom:string;
  prenom;
  age:number;
  description:string;
  constructor(nom:string,prenom:string,age:number,description:string,films:any){
    this.films=films;
    this.nom=nom;
    this.prenom=prenom;
    this.age=age;
    this.description=description;

  };


}
