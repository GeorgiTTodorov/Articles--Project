import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.user = !!localStorage.getItem('user');

      if (this.user) {
          this.router.navigate(['/dashboard'])
      }
  }
}
