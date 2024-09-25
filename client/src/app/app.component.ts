import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public users: {id: number, userName: string}[] = [];

  // Dependency injection
  private _http: HttpClient = inject(HttpClient);

  // ---------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // ---------------------------------------------------------------------------------------------
  ngOnInit() {
    this._http.get<{id: number, userName: string}[]>('https://localhost:5001/api/users').subscribe({
      next: (data: {id: number, userName: string}[]) => {
        this.users = data;
      }
    })
  }
}
