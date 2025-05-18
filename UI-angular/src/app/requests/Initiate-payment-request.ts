import { CardDetails } from './card-details';

export class InitiatePaymentRequest {
  card!: CardDetails;
  clientName!: string;
  items!: string;
  amount!: string;
}
