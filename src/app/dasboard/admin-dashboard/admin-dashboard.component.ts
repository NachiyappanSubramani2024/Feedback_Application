import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, HttpClientModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  feedbacks: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUserDetails();
  }

getUserDetails(): void {
  this.http.get<any[]>('http://localhost:3000/api/Feedbacks').subscribe({
    next: (data) => {
      this.feedbacks = data;
      console.log('Feedbacks:', this.feedbacks);
    },
    error: (error) => {
      console.error('Error fetching feedbacks:', error);
    }
  });
}



   getInitials(name: string): string {
    const names = name.split(' ');
    return names.length >= 2
      ? names[0][0] + names[1][0]
      : names[0][0];
  }

  parseStars(rating: string): number {
    const parsed = parseFloat(rating);
    return isNaN(parsed) ? 0 : parsed;
  }


}
