import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }
  user: Users ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "password": "1234",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };
  userEmail: string = 'Chaim_McDermott@dana.io';
  userPassword: string = '1234';

  ngOnInit(): void {
    this.userEmail = this.activatedRoute.snapshot.params['email'];
    this.userPassword = this.activatedRoute.snapshot.params['password'];
    this.usersService.login(this.userEmail, this.userPassword).subscribe({
      next: (data: any) => {
        this.user = data;
      }
    });
    }

}


