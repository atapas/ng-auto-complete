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
  public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                        "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                        "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","India", "Ireland","Italy","Kosovo",
                        "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                        "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                        "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                        "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];                
  public singlePlaceHolder: string = "Enter the Country Name";
  public singleLabel: string = "Which Country do you Live In?"; 
  public multiPlaceHolder: string = "Enter the movies";
  public multiLabel: string = "How many have you seen?";                
}
