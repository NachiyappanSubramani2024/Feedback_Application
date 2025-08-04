import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:3000/api/Feedbacks';

  constructor(private http: HttpClient) {}

  getUserDetails() {
    return this.http.get(this.apiUrl);
  }
}
