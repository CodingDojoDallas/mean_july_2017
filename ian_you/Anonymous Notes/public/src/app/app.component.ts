import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from './note.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newNote = {};
  notes = [];
  errors = [];

  constructor (private _noteService: NoteService) {}

  index() {
    return this._noteService.index()
    .then( notes => {this.notes = notes})
    .catch(err => console.log(err))
  }

  createNote(newNote){
    console.log(newNote);
    
    return this._noteService.create(newNote)
    .then(newNote => {
      console.log(newNote)
      this.index()
    })
    .catch(err => console.log(err))
  }

  ngOnInit () {
    this.index()
  }
}


