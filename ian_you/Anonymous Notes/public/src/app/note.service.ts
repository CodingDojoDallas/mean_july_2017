import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class NoteService {

  constructor(private _http:Http) { }

  index() {
    return this._http.get('/note').map(data=> data.json()).toPromise()
  }

  create(newNote) {
    console.log(newNote);
    
    return this._http.post('/note', newNote).map(data=> data.json()).toPromise()
  }
}
