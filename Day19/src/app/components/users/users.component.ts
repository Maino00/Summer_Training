import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  users: Users[] = [];
  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      }
    });
    }
}
