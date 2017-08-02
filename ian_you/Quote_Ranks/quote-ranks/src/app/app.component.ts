import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes : object[] = [];
  new_quote = {
    'votes' : 0
  };

  addQuote(quote){
    this.quotes.push(quote);
    this.new_quote = {
    'votes' : 0
    };
  console.log(this.quotes);
  
  };

  voteUp(idx){
    let temp_quote = this.quotes[idx]
    temp_quote['votes'] ++;
    console.log(temp_quote['votes']);
  }
  voteDown(idx){
    let temp_quote = this.quotes[idx]
    temp_quote['votes'] --;
    console.log(temp_quote['votes']);
  }
  voteDelete(idx){
    this.quotes.splice(idx, 1)
  }
}
