import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  public showModal = false;
  public message: any = '';

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
  }

  showUserDetails(): void {
    this.http.get(`${environment.apiUrl}/user/current`).subscribe({
      next: t => {
        this.message = t;
        this.showModal = true;
      }
    })
  }

  closeModal(): void {
    this.showModal = false;
  }
}
