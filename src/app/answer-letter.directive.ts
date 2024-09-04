import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[AnswerIndex]'
})
export class AnswerLetterDirective implements OnChanges {
  @Input() AnswerIndex!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const letter = this.getAnswerLetter(this.AnswerIndex);
    this.renderer.setProperty(this.el.nativeElement, 'innerText', letter);
  }

  private getAnswerLetter(index: number): string {
    const letters = ['A. ', 'B. ', 'C. ', 'D. '];
    const letterIndex = index % letters.length;
    return letters[letterIndex] || '';
  }
}
