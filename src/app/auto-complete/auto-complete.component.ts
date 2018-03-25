import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  public query = ""; // will hold the string typed by the user.
  
  public filteredList = []; // will hold suggestions being displayed by the component.
  public elementRef;
  private selectedIdx: number;
  public selected = [];
  @Input() public data = [];

  constructor(myElemenetRef: ElementRef) { 
    this.elementRef = myElemenetRef;
    this.selectedIdx = -1;
  }

  ngOnInit() {
  }

  public filter(event: any) {
    if (this.query != null) {
      this.filteredList = this.data.filter(function(e1) {
        return e1.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
      if (event.code === 'ArrowDown' && this.selectedIdx < this.filteredList.length) {
        this.selectedIdx++;
      } else if (event.code === 'ArrowUp' && this.selectedIdx > 0) {
        this.selectedIdx--;
      } else if (event.code === 'Enter') {
        this.handleEnter();
      }
    } else {
      this.filteredList = [];
    }
  }

  public select(item) {
    this.selected.push(item);
    this.query = '';
    this.filteredList = [];
    this.selectedIdx = -1;
  }

  public handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
    }
    this.selectedIdx = -1;
  }

  public handleEnter() {
    if (this.selectedIdx > -1) {
      this.query = '';
      this.selected.push(this.filteredList[this.selectedIdx]);
    }
    this.filteredList = [];
    this.selectedIdx = -1;
  }

  public remove(item){
    this.selected.splice(this.selected.indexOf(item),1);
  }

}
