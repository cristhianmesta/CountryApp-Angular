import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: []
})
export class CountriesInputComponent implements OnInit  {
  
  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();  

  searchParameter : string = ""
  debouncer       : Subject<string> = new Subject();

  ngOnInit() {
     this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit(valor)
      });
  }

  search() { 
    this.onEnter.emit(this.searchParameter);
  }

  pressKey(){
    this.debouncer.next(this.searchParameter);
  }


}
