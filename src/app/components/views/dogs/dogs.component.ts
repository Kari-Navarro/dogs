import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from '@app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dogs.component.html',
  styleUrls: []
})
export class DogsComponent  implements OnInit {
  public perritos!:any;

  constructor(private dogService:APIService ){}

  ngOnInit(){

    console.log('inicializando el componente')
    this.dataPerrito1()
    this.dataPerrito2()
    console.log('aqui estan los perritos', this.perritos)
  }

  public dataPerrito1(){
  this.dogService.getData().subscribe((res)=>{
      this.perritos = res
      console.log('Fuente de datos 1',res)
    })
  }

  public dataPerrito2(){
    this.dogService.getData().subscribe((res)=>{
      console.log('fuente de datos 2 ', res)
    })
  }
  }

