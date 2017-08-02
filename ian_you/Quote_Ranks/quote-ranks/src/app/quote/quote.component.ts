import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quotes;

  @Output() addVote = new EventEmitter();
  @Output() subtractVote = new EventEmitter();
  @Output() deleteVote = new EventEmitter();
    
  constructor() { }

  voteUp(idx){
    this.addVote.emit(idx);
  }
  voteDown(idx){
    this.subtractVote.emit(idx);
  }
  voteDelete(idx){
    this.deleteVote.emit(idx);
  }

  ngOnInit() {
  }

}
