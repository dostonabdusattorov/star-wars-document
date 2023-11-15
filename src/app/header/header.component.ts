import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setAttribute(
      this.dom.body,
      'class',
      localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
        ? 'theme-dark mat-app-background'
        : 'theme-light mat-app-background'
    );
  }

  onToggleMode({ checked }: MatSlideToggleChange): void {
    console.log(checked);

    localStorage.setItem('theme', checked ? 'dark' : 'light');

    this.renderer.setAttribute(
      this.dom.body,
      'class',
      localStorage.getItem('theme') === 'light'
        ? 'theme-light mat-app-background'
        : 'theme-dark mat-app-background'
    );
  }

  get isThemeDark(): boolean {
    return (
      !!localStorage.getItem('theme') &&
      localStorage.getItem('theme') === 'dark'
    );
  }
}
