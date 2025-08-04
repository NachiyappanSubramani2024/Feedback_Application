import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      rating: 4
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Admin',
      rating: 5
    },
    {
      name: 'Alex Brown',
      email: 'alex@example.com',
      role: 'Moderator',
      rating: 3
    }
  ];
}
