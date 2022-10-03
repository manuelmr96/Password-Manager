import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchByName: EventEmitter<any> = new EventEmitter();

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  onKey(event){
    const name = event.target.value;
    this.searchByName.emit(name);
  }

}
