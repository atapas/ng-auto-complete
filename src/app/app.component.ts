import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public movies = ["Adam and Eve", "Black Hole", "Cat and Dog", "Elf", "Fog", "Frog",
                  "Ghost", "Grahan", "Garam Hawa", "Hollow", "Helm", "Hide and Seek"];
}
