import { Component, OnInit } from '@angular/core';

import Tabulator from 'tabulator-tables';

// import AppendixData from '../../../../assets/db-appendix.json';
import { AllHTTPsService } from '../../__Services/all-https.service';
import { I_Appendix, Columns } from './model/appendix';

@Component({
  selector: 'app-appendix',
  templateUrl: './appendix.component.html',
  styleUrls: ['./appendix.component.css'],
})
export class AppendixComponent implements OnInit {
  title: string = `Appendix - Created with Tabulator`;
  tab: HTMLElement = document.createElement('div');
  innerGrid!: Tabulator;
  // appendixData: I_Appendix[] = AppendixData;
  appendixData!: I_Appendix[];

  constructor(private allHTTPsService: AllHTTPsService) {
    this.allHTTPsService.getAppendixs().subscribe((response) => {
      // console.log(response.data);
      this.appendixData = response.data;
      // console.log(this.appendixData);
    });
  }

  ngOnInit(): void {
    // this.getAppendixsData();
    this.drawTable();
  }

  getAppendixsData() {}

  drawTable(): void {
    // this.getAppendixsData();
    // console.log(this.appendixData);
    let parentDiv = document.getElementById('inner-table');
    let tabConfig: Tabulator.Options = {
      data: this.appendixData,
      height: '100%',
      layout: 'fitColumns',
      columns: Columns,
      resizableRows: true,
      movableColumns: true,
      clipboard: true,
      clipboardPasteAction: 'replace',
    };
    this.innerGrid = new Tabulator(this.tab, tabConfig);
    this.tab.classList.add('table-light');
    parentDiv!.appendChild(this.tab);
    this.innerGrid.redraw(true);
  }
}
