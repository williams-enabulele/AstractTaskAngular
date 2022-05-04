import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../types/Task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tasks!: Array<Task>;
  constructor() { }

  ngOnInit(): void {
  }

}


