import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DreamService } from '../../services/dream.service';
import { DreamEntry } from '../../models/dream-entry';

@Component({
  selector: 'app-dream-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="content-card list-container">
        <h1>My Dream Journal</h1>
        <button (click)="newDream()" class="new-dream-btn">New Dream Entry</button>
        <div class="dreams-list">
          <div *ngFor="let dream of dreams" class="dream-card" (click)="editDream(dream.id)">
            <h3>{{dream.title}}</h3>
            <p>{{dream.date | date:'medium'}}</p>
            <p class="preview">{{dream.content.substring(0, 100)}}...</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-container {
      max-width: 800px;
      margin: 2rem auto;
    }
    .new-dream-btn {
      margin-bottom: 2rem;
    }
    .dreams-list {
      display: grid;
      gap: 1rem;
    }
    .dream-card {
      padding: 1rem;
      background: white;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .dream-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .preview {
      color: #666;
    }
  `]
})
export class DreamListComponent {
  dreams: DreamEntry[] = [];

  constructor(
    private dreamService: DreamService,
    private router: Router
  ) {
    this.dreams = this.dreamService.getDreams()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  newDream() {
    this.router.navigate(['/dreams/new']);
  }

  editDream(id: string) {
    this.router.navigate(['/dreams/edit', id]);
  }
}
