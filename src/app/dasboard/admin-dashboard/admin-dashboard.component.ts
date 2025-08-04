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
export class AdminDashboardComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.http.get('http://localhost:3000/api/Feedbacks').subscribe({
      next: (data) => {
        console.log('Feedbacks:', data);
        // You can store it to display on the UI
      },
      error: (error) => {
        console.error('Error fetching feedbacks:', error);
      }
    });
  }

  ngAfterViewInit(): void {
    const feedbackCtx = (document.getElementById('feedbackChart') as HTMLCanvasElement)?.getContext('2d');
    if (feedbackCtx) {
      new Chart(feedbackCtx, {
        type: 'line',
        data: {
          labels: ['Sep 25', 'Sep 26', 'Sep 27', 'Sep 28', 'Sep 29', 'Sep 30', 'Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6'],
          datasets: [
            {
              label: 'Positive Feedback',
              data: [24, 32, 18, 27, 35, 40, 38, 45, 42, 50, 48, 55],
              borderColor: '#4361ee',
              backgroundColor: 'rgba(67, 97, 238, 0.1)',
              tension: 0.3,
              fill: true
            },
            {
              label: 'Negative Feedback',
              data: [8, 6, 12, 9, 5, 7, 10, 4, 8, 6, 9, 5],
              borderColor: '#f72585',
              backgroundColor: 'rgba(247, 37, 133, 0.1)',
              tension: 0.3,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    const ratingCtx = (document.getElementById('ratingChart') as HTMLCanvasElement)?.getContext('2d');
    if (ratingCtx) {
      new Chart(ratingCtx, {
        type: 'doughnut',
        data: {
          labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
          datasets: [{
            data: [45, 25, 15, 8, 7],
            backgroundColor: ['#4cc9f0', '#4361ee', '#3a0ca3', '#7209b7', '#f72585'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          cutout: '70%'
        }
      });
    }
  }
}
