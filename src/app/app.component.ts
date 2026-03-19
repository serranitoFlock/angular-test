import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [ListComponent, MatInputModule, MatFormFieldModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test';

  arrayStringParam = ['5', '9', '8', '2', '7', '3', '4', '1', '8', '4'];
  numberParam?: number;
}
