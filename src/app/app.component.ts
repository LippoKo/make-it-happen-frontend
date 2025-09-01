import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title: string = '';

  constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
    this.httpClient
      .get<{ title: string }>('/api/hello', { responseType: 'json' })
      .subscribe((response) => (this.title = response.title));
  }
}
