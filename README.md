### Web Application Using AngularJS, ES6 and Webpack

A simple boilerplate using AngularJS, Webpack and ES6

### Install

```
npm install

### Run

```
# Web
npm run devserver

### Translation

Just added [ng-translate](https://github.com/angular-translate/angular-translate) to the boilerplate !
Here how it works :

```
Create a folder translation in the module where you want to use ng-translate
then create a file named en.json (for english) and put your translation
Webpack will automatically merge every en.json files into one.
then you can use it like that : {{ 'ui.home.title' | translate }} into your HTML
```
You can find an example into the home module.
Look into the webpack.config to see how to add new language.
