import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  test

  constructor() 
  {
    this.test = new Array<string>()
  }

  ngOnInit()
  {
  }
  
  async ionViewDidEnter(){
    this.test = []
    var obj = await Storage.keys()

    for (var key of obj.keys)
    {
      // console.log(key)
      var item = await Storage.get({ key: key })

      this.test.push(item)
    }
  }
}
