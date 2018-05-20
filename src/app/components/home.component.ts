import { Component } from '@angular/core'
@Component({
    selector: 'inicio',
    templateUrl: '../views/home.html'
})
export class InicioComponent{
    public titulo: string;
    constructor(){
        this.titulo = 'Bienvenido a CompuSurOverflow'
    }
}