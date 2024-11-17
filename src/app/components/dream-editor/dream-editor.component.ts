import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DreamService } from '../../services/dream.service';
import { DreamEntry } from '../../models/dream-entry';

@Component({
  selector: 'app-dream-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="editor-container">
      <input [(ngModel)]="dream.title" placeholder="Dream Title" class="title-input">
      <textarea [(ngModel)]="dream.content" placeholder="Describe your dream..." class="content-input"></textarea>
      <div class="button-container">
        <button (click)="saveDream()">Save Dream</button>
        <button (click)="goBack()" class="secondary">Back to List</button>
      </div>
    </div>
  `,
  styles: [`
    .editor-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
    }
    .title-input {
      width: 100%;
      font-size: 1.5rem;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .content-input {
      width: 100%;
      height: 400px;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
    }
    .button-container {
      display: flex;
      gap: 1rem;
    }
    .secondary {
      background-color: #6c757d;
    }
  `]
})
export class DreamEditorComponent implements OnInit {
  dream: DreamEntry = {
    id: '',
    title: '',
    content: '',
    date: new Date().toISOString()
  };

  constructor(
    private dreamService: DreamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      const existingDream = this.dreamService.getDream(id);
      if (existingDream) {
        this.dream = existingDream;
      }
    }
  }

  saveDream() {
    this.dreamService.saveDream(this.dream);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/dreams']);
  }
}
