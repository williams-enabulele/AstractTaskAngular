import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../types/Task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tasks!: Array<Task>
  @Output() open = new EventEmitter()  
  @Output() delete = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  openModal(id: string){
    this.open.emit(id)
  }

  deleteTask(id: string){
    this.delete.emit(id)
  }

}
