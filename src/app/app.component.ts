import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HenriqueBrainerGustavoMelo';
  logo = 'favicon.ico';
  exibe = true;

  exibirNome(){
    return "giug9igh";
  }
  exibirAlerta(){
    alert("You are?");
  }


}
