import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private router: Router,
              private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
          .subscribe(users => {this.users = users; });
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
  delete(user: User): void {
      this.users = this.users.filter( u => u !== user);
      this.userService.deleteUser(user).subscribe();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
