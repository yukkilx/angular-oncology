import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
    add(name: string, password: string): void {
      name = name.trim();
      password = password.trim();
      if (!name || !password) { return; }
      this.userService.addUser({ name, password } as User)
        .subscribe(user => {
          this.users.push(user);
        });
    }
}
