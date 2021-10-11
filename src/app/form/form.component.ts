import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quoter } from '../quoter';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() popQuote= new EventEmitter()
  yourName!: string;
  quoteTitle!: string;
  quote!: string;
  quoteAuthor!: string;
  poppedQuote:any

  publishQuote(){
    this.poppedQuote = new Quoter(this.quoteTitle, this.yourName, this.quoteAuthor, this.quote)
    this.quoteTitle= ''
    this.yourName= ''
    this.quoteAuthor = ''
    this.quote= ''
    this.popQuote.emit(this.poppedQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
