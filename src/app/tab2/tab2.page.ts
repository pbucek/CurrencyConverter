import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  history

  constructor() 
  {
    this.history = new Array<string>()
  }

  ngOnInit()
  {
  }
  
  async ionViewDidEnter(){
    this.history = []
    var obj = await Storage.keys()

    for (var key of obj.keys)
    {
      // console.log(key)
      var item = await Storage.get({ key: key })

      this.history.push(item)
    }
  }
}
