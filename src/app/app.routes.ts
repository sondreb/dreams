import { Routes } from '@angular/router';
import { DreamListComponent } from './components/dream-list/dream-list.component';
import { DreamEditorComponent } from './components/dream-editor/dream-editor.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dreams', pathMatch: 'full' },
  { path: 'dreams', component: DreamListComponent },
  { path: 'dreams/new', component: DreamEditorComponent },
  { path: 'dreams/edit/:id', component: DreamEditorComponent }
];
