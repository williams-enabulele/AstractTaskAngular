import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@app/features/auth/auth.service';
import { UserService } from '../user.service';
import { Task } from '../types/Task';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AlertService } from '@app/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('addEditModal') addEditModal: any;

  tasks!: Array<Task>
  error!: string
  form!: FormGroup
  categories = []
  userId!: string
  id!: string;
  editMode = false
  currentDate = Date.UTC
  




  constructor(
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const appUser = this.authService.decode(token);
      this.userId = appUser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      this.userService.read(this.userId).subscribe({
        next: response => {
          this.tasks = response.data
        },
        error: err => {
          this.error = err.error.message
        }
      })
    }
    this.userService.getCategories().subscribe({
      next: response => {
        this.categories = response.data
      },
      error: err => {
        // To do
      }
    })

    this.initializeForm()
   
  }

  getTask() {
    this.userService.read(this.userId).subscribe({
      next: response => {
        this.tasks = response.data
      },
      error: err => {
        this.error = err.error.message
      }
    })
  }
  submit() {
    if (this.editMode) {
      this.updateTask()
    }
    else {
      this.createTask()
      this.clearForm()
    }
  }

  createTask() {
    this.userService.create(this.form.value).subscribe({
      next: response => {
        this.getTask();
        this.alertService.alertWithSuccess("New task Created!");
        this.form.reset();
        this.initializeForm();
      },
      error: err => {
          this.alertService.alertWithError(err.error.message)
      }
    })
  }

  initializeForm(){
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      deadLine: [this.currentDate, Validators.required],
      taskCategoryId: ['', Validators.required],
      userId: [this.userId, Validators.required],
      isCompleted: [false, Validators.required],
    } );
  }

  updateTask() {
    this.form.addControl("id", new FormControl(this.id, Validators.required));
    this.userService.update(this.id, this.form.value,).subscribe({
      next: response => {
        this.getTask()
      },
      error: err => {

      }
    })
  }

  deleteTask(id: string) {

    this.userService.delete(id).subscribe({
      next: response => {
        this.id = id
        this.getTask();
     
      },
      error: err => {

      }
    })
  }


  openModal(id: string) {
    if (id) {
      this.editMode = true
      const task = this.tasks.filter(x => x.id == id);
      console.log(task[0])
      this.form.patchValue(task[0]);
      this.id = id
    }
  }
  clearForm() {
    this.form.reset()
    this.editMode = false
    this.id = ""
  }






}
