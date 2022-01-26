import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient) { }

  public getConvertion(amount: number, from: string, to: string)
  {
    return this.http.get('https://api.exchangerate.host/convert?from='+from+'&to='+to+'&amount='+amount+'&places=3')
  }

  public getCurrencyCodes()
  {
    return this.http.get('https://openexchangerates.org/api/currencies.json');
  }
}
