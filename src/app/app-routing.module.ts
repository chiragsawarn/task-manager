import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';

const routes: Routes = [
  {
    path:'addTasks',
    component:AddTasksComponent
  },
  {
    path:'viewTasks',
    component:ViewTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
