
import { Component, ViewChild } from '@angular/core';
import { nextContext } from '@angular/core/src/render3';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  

})
export class HomePage {
  @ViewChild('Slider') Slider: any;
 
 

  sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: true,
    loop:true,
    centeredSlides: true
  };

  Herois = [
    {
      "img": "assets/imagens/ww.jpg",
      "nome": "Mulher Maravilha",
      "info":"É considerada um dos maiores ícones da cultura pop do sexo feminino"
    },

    {
      "img": "assets/imagens/cap.jpg",
      "nome": "Capitão America ",

    },
    {
      "img": "assets/imagens/spider.jpg",
      "nome": "Homem Aranha ",

    },
    {
      "img": "assets/imagens/bat.jpg",
      "nome": "Batman",

    },
    {
      "img": "assets/imagens/The-Flash.jpg",
      "nome": "The Flash ",

    }


  ]

  constructor() { }

  slideNext() {
    this.Slider.slideNext();
  }

  slidePrev() {
    this.Slider.slidePrev();
  }
  
  


}
