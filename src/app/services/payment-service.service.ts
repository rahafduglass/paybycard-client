import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InitiatePaymentRequest} from '../requests/Initiate-payment-request';
import {Observable} from 'rxjs';
import {CompletePaymentRequest} from '../requests/complete-payment-request';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  constructor(private http: HttpClient) {
  }

  private initiatePaymentRequest: InitiatePaymentRequest = {
    card: {
      expiryDate: '',
      cardNumber: '',
      cvv: ''
    },
    items: '',
    amount: '',
    clientName: '',
  };

  private completePaymentRequest: CompletePaymentRequest = {
    verifyCard: {
      expiryDate: '',
      cardNumber: '',
      cvv: ''
    },
    paymentReference: '',
    otp: ''
  }

  initiatePayment(request: InitiatePaymentRequest): Observable<any> {
    this.initiatePaymentRequest.card = request.card;
    this.initiatePaymentRequest.clientName = request.clientName;
    this.initiatePaymentRequest.amount = request.amount;
    this.initiatePaymentRequest.items = request.items;
    sessionStorage.setItem('initiatePaymentRequest', JSON.stringify(this.initiatePaymentRequest));
    return this.http.post("http://localhost:8081/api/v1/payment-process/initiate", request);
  }

  sendOtp() {
    const requestBody = {paymentReference: this.getReferenceNumber()};
    return this.http.put("http://localhost:8081/api/v1/payment-process/verify", requestBody, {headers: {'Content-Type': 'application/json'}})
  }

  submitOtp(otp: string) {

    this.completePaymentRequest.verifyCard = this.getInitiatePaymentRequest().card;
    this.completePaymentRequest.paymentReference = this.getReferenceNumber();
    this.completePaymentRequest.otp = otp;
    return this.http.put("http://localhost:8081/api/v1/payment-process/complete", this.completePaymentRequest, {headers: {'Content-Type': 'application/json'}})
  }

  setReferenceNumber(referenceNumber: string) {
    sessionStorage.setItem('paymentReference', referenceNumber);
  }

  getReferenceNumber(): string {
    const storedReference = sessionStorage.getItem('paymentReference');
    return storedReference ? storedReference : '';
  }

  getInitiatePaymentRequest(): any {
    const initiatePaymentRequestJson = sessionStorage.getItem('initiatePaymentRequest');

    if (initiatePaymentRequestJson) {
      return JSON.parse(initiatePaymentRequestJson);
    }
    return null;
  }
}
