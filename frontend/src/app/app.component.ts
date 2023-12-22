import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get<any[]>('http://localhost:4000/').subscribe((res) => {
      this.data = res;
    });
  }
}
