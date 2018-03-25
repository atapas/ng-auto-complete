# ng-auto-complete

## Introduction
UI Component built using Angular to Perform Autocomplete(Single and Multi-Select)
The Source Code is inspired from the blog written here, with few improvements on top of it: http://4dev.tech/2016/03/tutorial-creating-an-angular2-autocomplete/

## About
This autocomplete component works in Single and Multi-Select mode. It is flexible enough to support keyboard accessibility.

### usage
Syntax to use the auto complete component is straightforward:
```html
    <app-auto-complete
        [data] = "countries"
        [multi] = false
        [placeHolder] = "singlePlaceHolder" 
        [label] = "singleLabel">
    </app-auto-complete>
```
where,
* data - A Mandatory attribute to provide data to the auto complete component.
* multi - An optional attribute to define if the component should support multi selection. It is single selection by default.
* placeHolder - An optional attribute to define the place holder text for the auto complete component.
* label - An optional attribute to define the label for the auto complete component.

### Build

#### Dev
For Dev mode, Clone the project and do:
* npm install
* ng serve

You can access the app on `localhost:4200`

#### Production
For Production mode, clone the project and do:
* npm install
* npm start

It will create the dist folder for you to deploy and run the demo.

## Demo
See the demo here: https://ng-auto-complete.herokuapp.com/


