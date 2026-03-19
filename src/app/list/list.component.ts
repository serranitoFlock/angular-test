
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-list',
    imports: [MatCardModule, MatListModule],
    styleUrl: './list.component.scss',
    templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() numberParam?: number;
  @Input() arrayStringParam?: Array<string>;
  @Input() objectParam: any;

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['numberParam'] &&
      this.arrayStringParam &&
      this.numberParam
    ) {
      this.arrayStringParam = this.reverseArray(this.arrayStringParam);
      this.arrayStringParam = this.filterArray(
        this.arrayStringParam,
        this.numberParam
      );
    }
  }

  reverseArray(arrayStringParam: Array<string>): Array<string> {
    const newArray = new Array<string>();
    this.arrayStringParam?.forEach((item) => {
      newArray.unshift(item);
    });
    return newArray;
  }

  filterArray(arrayStringParam: Array<string>, filter: number): Array<string> {
    const newArray = new Array<string>();
    this.arrayStringParam?.forEach((item) => {
      if (item !== filter.toString()) {
        newArray.push(item);
      }
    });
    return newArray;
  }
}
