import { Quote } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Quoter } from '../quoter';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {

  quotes=[new Quoter("Star-Wars", "Obi wan Kenobi","darth Vader", "i am your father"),
          new Quoter("sound of silence", "Vickie", "desastre", "Silence is golden. Duct tape is silver.")]
          initialNumber!: number;
          rearNumber!: number;
          check!: number;

          addQuote(emittedQuote: Quoter){
            this.quotes.push(emittedQuote)
          }
          // expandCard(index: any){
          //   this.quotes[index].expandCard = !this.quotes[index].expandCard;
          // }
          upvote(i: any){
            this.quotes[i].upvotes+=1
          }

          downvote(i: any){
            this.quotes[i].downvotes+=1
          }

          delQuote(i: any){
            this.quotes.splice(i,1)
          }

          highestUpvote(){
            this.initialNumber=0
            this.rearNumber=0

          for (this.check = 0; this.check < this.quotes.length; this.check++) {
            this.rearNumber = this.quotes[this.check].upvotes;
            if(this.rearNumber > this.initialNumber){this.initialNumber= this.rearNumber}
            
          }
          return this.initialNumber
        }


        

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function(){
    //   $("#blue").click(function(){
    //     $("#card").show();
    //   })
    //});

  }

}