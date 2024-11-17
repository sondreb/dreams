import { Injectable } from '@angular/core';
import { DreamEntry } from '../models/dream-entry';

@Injectable({
  providedIn: 'root'
})
export class DreamService {
  private readonly STORAGE_KEY = 'dreamJournal';

  getDreams(): DreamEntry[] {
    const dreams = localStorage.getItem(this.STORAGE_KEY);
    return dreams ? JSON.parse(dreams) : [];
  }

  saveDream(dream: DreamEntry) {
    const dreams = this.getDreams();
    if (dream.id) {
      const index = dreams.findIndex(d => d.id === dream.id);
      dreams[index] = dream;
    } else {
      dream.id = Date.now().toString();
      dreams.push(dream);
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dreams));
  }

  deleteDream(id: string) {
    const dreams = this.getDreams().filter(d => d.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dreams));
  }

  getDream(id: string): DreamEntry | undefined {
    return this.getDreams().find(d => d.id === id);
  }
}
