import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { PlayerComponent } from './components/player/player.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'editor', component: EditorComponent, canActivate: [] },
      { path: 'player', component: PlayerComponent, canActivate: [] },
      { path: '', redirectTo: 'editor', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
