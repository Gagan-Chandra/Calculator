import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public num1!:number;
  public num2!:number;
  public num3!:number;
  public num4!:number;
  public num5!:number;
  public num6!:number;

  add()
  {
    this.num3=this.num1+this.num2;
  }
  sub()
  {
    this.num3=this.num1-this.num2;
  }
  mul()
  {
    this.num3=this.num1*this.num2;
  }
  div()
  {
    this.num3=this.num1/this.num2;
  }
  fact()
  {
    var i,factorial=1;
    for (let i = this.num4; i >= 1; i--) 
    {
      factorial=factorial*i  
    }
    this.num5=factorial;
  }
  prime()
  {
    
  }
}