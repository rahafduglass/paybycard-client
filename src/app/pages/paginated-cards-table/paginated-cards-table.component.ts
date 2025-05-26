import {Component, OnInit} from '@angular/core';
import {CardService} from '../../services/card/card.service';
import { CommonModule } from '@angular/common';
import {PaginatedCardsResponse} from '../../response/paginted-card-response';

@Component({
  selector: 'app-cards',
  templateUrl: './paginated-cards-table.component.html',
  styleUrls: ['./paginated-cards-table.component.css'],
  imports: [CommonModule],
})
export class PaginatedCardsTableComponent implements OnInit {
  constructor(private cardService: CardService) {
  }

   paginatedCardsResponse: PaginatedCardsResponse = {
    empty: false,
    size: 5,
    content: [],
    number: 0,
    totalElements: 0,
    totalPages: 0
  };

  ngOnInit(): void {
    this.loadCards(this.paginatedCardsResponse.number);
  }

  loadCards(pageNumber: number){
    this.cardService.getCards(pageNumber,this.paginatedCardsResponse.size).subscribe({
      next: (res) => {
        this.paginatedCardsResponse.content = res.content;
        this.paginatedCardsResponse.number = res.number;
        this.paginatedCardsResponse.totalPages = res.totalPages;
        this.paginatedCardsResponse.totalElements = res.totalElements;
      },
      error: (err) => {
        console.error(err.toString());
      //  this.errorMessage = 'Failed to load cards';
        alert("cant load cards");
      }
    });
  }
}
