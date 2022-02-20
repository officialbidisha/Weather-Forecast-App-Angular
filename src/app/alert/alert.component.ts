import { OnInit , Input, Component} from '@angular/core';
@Component({
    selector: 'app-alert',
    template: ` <div> This is an alert {{message}}</div>`,
    styles:[   `
            div{
                border: 1px solid black;
                background: salmon;
                padding: 10px;
                font-family: sans-sarif;
            }
    `]
})

export class AlertComponent{
     @Input()
     public message : string;
     constructor(){}
}