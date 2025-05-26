export class PaginatedCardsResponse {
  empty!: boolean;
  size!: number;
  content!: Card[];
  number!: number;         // current page number
  totalElements!: number;
  totalPages!: number;
}
export class Card {
  id!: number;
  cardNumber!: string;
  expiryDate!: string;
  balance!: number;
  clientEmail!: string;
  clientName!: string;
}
