import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        // Aqui dentro por lo general van otros modulos
        // Hola
    ]
})
export class ContadorModule{}

