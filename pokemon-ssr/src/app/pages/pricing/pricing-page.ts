import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css',
})
export default class PricingPage implements OnInit {
  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit(): void {
    // this.title.setTitle("Princing Page")
    // this.meta.updateTag({
    //   name: 'description',
    //   content: 'Este es mi Princing Page',
    // })

    // this.meta.updateTag({
    //   name: 'og:title',
    //   content: 'Princing Page'
    // })

    // this.meta.updateTag({
    //   name: 'keywords',
    //   content: 'Hola, Mundo, Anderson, Revelo, Curso, Angular, PRO'
    // })
  }
}
