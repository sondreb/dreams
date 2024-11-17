import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="fullscreen-container">
      <img src="/icons/icon-1024x1024.png" alt="Dreams Logo" class="logo" />
      <h1>In development...</h1>
      <button routerLink="/dreams" class="start-button">Open Dream Journal</button>
    </div>
  `,
  styles: [`
    .fullscreen-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    .logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 3rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .start-button {
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 24px;
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      transition: transform 0.2s;
    }

    .start-button:hover {
      transform: translateX(-50%) scale(1.05);
      background-color: #0056b3;
    }
  `]
})
export class HomeComponent {}
