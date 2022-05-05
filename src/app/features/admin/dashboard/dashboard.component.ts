import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AdminService } from '../admin.service';
import { Task } from '../types/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Tasks!: Array<Task>;
  loading: boolean = false;
  isEmpty = true;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.adminService.getTasks().subscribe({
      next: response => {
        this.loading = false;
        this.Tasks = response.data;
        console.log(this.Tasks);
      },
      error: err => {
        this.loading = false
      }
    });
  }

}
