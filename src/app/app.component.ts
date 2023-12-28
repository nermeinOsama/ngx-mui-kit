import { Component } from '@angular/core';
import { IAlert, MukAlertComponent } from 'ngx-mui-kit/components/muk-alert';
import {
  ButtonType,
  IButton,
  MukButtonComponent,
  MukButtonTypes,
  MukThemePalette,
  TooltipPositions,
} from 'ngx-mui-kit/components/muk-button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  buttonConfig:IButton={
    text:'Add',
    isMukButton:false,
    isLoading:false,
    color:MukThemePalette.Primary,
    matType:MukButtonTypes.Raised,
    spinnerColor:'white',
    icon:'add',
    isDisabled:false,
    type:ButtonType.Button,
    toolTip:{
    position: TooltipPositions.Below,
    toolTip: 'Add'
    },
    onClick:(e:any)=>{
    console.log('event',e)
    }
}


onClick() {
console.log("clicked");
}


  alert: IAlert = {
    direction: "ltr",
    panelClass: "class",
    message: "this is alert!",
    action: "Close",
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
  };
}
