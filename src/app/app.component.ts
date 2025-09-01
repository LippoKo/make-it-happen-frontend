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
      .get<{ title: string }>('/api/hello', { responseType: 'json' })
      .subscribe((response) => (this.title = response.title));
  }
}
