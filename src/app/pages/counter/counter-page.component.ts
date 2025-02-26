import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { interval } from "rxjs";

@Component({
    templateUrl: './counter-page.component.html',
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px
        }
    `,
})
export class CounterPageComponent {

    counter = 10;
    counterSignal = signal(10)

    constructor(){}

    increase(value:number){
        this.counter += value
        this.counterSignal.update(current => current + value)
    }

    reset(){
        this.counter = 0
        this.counterSignal.set(0)
    }
}