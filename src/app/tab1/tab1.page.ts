import { Component } from '@angular/core';
import { ConverterService } from '../api/converter.service';

import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  convInput:number
  convOutput:number
  currencyCodes:Array<string>
  testArray:string[]
  codeInput:string
  codeOutput:string
  i:number
  
  constructor(private conversionService: ConverterService)
  {
    this.i = 0
    this.convInput = 0;
    this.convOutput = 0;
    this.codeInput = "EUR";
    this.codeOutput = "USD";
    this.currencyCodes = new Array<string>()
  }

  ngOnInit()
  {
    // Clearing local storage
    Storage.clear()

    // Getting currency codes from API and storing them in array
    this.conversionService.getCurrencyCodes().subscribe((data)=>
    {
      for (let code of Object.keys(data))
      {
        this.currencyCodes.push(code)
      }
    })

  }
  
  public btnConvertClicked():void
  {
    if (this.convInput <= 0)
    {
      this.convOutput = 0;
    }
    else
    {
      // Getting currency conversion from API
      this.conversionService.getConvertion(this.convInput,this.codeInput,this.codeOutput).subscribe( (data) =>
      {
        this.convOutput = data['result'];
        
        // Storing the conversion in local storage
        Storage.set({
          key: this.i.toString(),
          value: this.convInput.toString() + " " + this.codeInput + "  >  " + data['result'] + " " + this.codeOutput
        })

        this.i++
      })


    }
  } 
}
