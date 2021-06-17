import { Component, OnInit } from '@angular/core';
import { Printer } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-recu-stationnement',
  templateUrl: './recu-stationnement.page.html',
  styleUrls: ['./recu-stationnement.page.scss'],
})
export class RecuStationnementPage implements OnInit {

  constructor(private printer: Printer) { }

  ngOnInit() {
  }
  testPrint = function () {

    console.log("impression");
    var sTable = document.getElementById('tab').innerHTML;
    var t =  sTable;
    this.printer.print(
      t
    );

  }

}
