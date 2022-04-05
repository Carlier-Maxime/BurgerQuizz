import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-decompte',
  templateUrl: './decompte.component.html',
  styleUrls: ['./decompte.component.css']
})
export class DecompteComponent implements OnChanges {

  @Input('tempsTime')
  time!: number;

  @Input('question')
  numQ!: number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    if(this.time == 0 ){
      this.time = 15;
    }

    setInterval(() => { if (this.time > 0) this.time--; }, 1000);

  }

}


