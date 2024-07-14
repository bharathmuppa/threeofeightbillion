import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'call',
    loadComponent: () => import('./video-call/video-call.component')
  },
  {
    path: 'rooms/:id',
    loadComponent: () => import('./room/room.component')
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
  }];
