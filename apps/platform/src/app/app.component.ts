import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'devpr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  avatares: string[] = []

  ngOnInit() {
    for (let i = 1; i< 18; i++) {
      this.avatares.push(`avatares/${i}.svg`)
    }
  }
}
