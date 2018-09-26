import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  login(user, pwd) {
            if (user && pwd) {
                 this.router.navigateByUrl('index');
            } else if (user === '' || pwd === '') {
                alert('用户名或密码不能为空！');
            } else {
                alert('用户名或密码错误！');
            }
          }
  getUsers() {
     return this.userService.getUsers()
     .subscribe(users => this.users = users);
    }
 }
