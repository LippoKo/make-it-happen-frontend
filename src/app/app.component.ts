import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private httpClient = inject(HttpClient);

  public title = '';

  public ngOnInit(): void {
    this.httpClient
      .get('/api/hello', { responseType: 'text' })
      .subscribe((response: string) => (this.title = response));
  }
}
