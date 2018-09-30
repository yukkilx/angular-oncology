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

  users = this.getUsers();
  use: User;
  count = 0;

  constructor(public router: Router,
              public userService: UserService) { }

  ngOnInit() {
  }

  login(user, pwd) {
            if (user && pwd) {
              for (const use of this.users) {
                    if (use.name === user && use.password === pwd) {
                     this.router.navigateByUrl('index');
                     const username = user;
                     break;
                    } else if (use.name === user && use.password !== pwd) {
                      alert('用户密码错误！'); break;
                    }
                this.count++;
              }
              if (this.count === this.users.length) {
                  alert('此用户不存在！');
              }
            } else {
                alert('用户名或密码不能为空！');
            }
          }

  getUsers() {
     return this.userService.getUsers()
     .subscribe(users => this.users = users);
    }
 }
