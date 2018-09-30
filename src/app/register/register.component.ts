import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends LoginComponent implements OnInit {

  users = this.getUsers();
  use: User;
  count = 0;

  constructor(public router: Router,
              public userService: UserService) {
    super(router, userService);
  }

  ngOnInit() { }

  register(user, pwd1, pwd2) {
      if (user && pwd1 && pwd2) {
        for (const use of this.users) {
          if (use.name === user) {
               alert('此用户已存在，请重新输入用户名！'); break;
           } else {
             this.count ++;
           }
        if (this.count === this.users.length ) {
           if (pwd1 === pwd2) {
           this.router.navigateByUrl('index');
           alert('注册成功！');
           } else {
           alert('两次输入的密码不一致！');
         }
         }
        }
   } else {alert('用户名和密码不能为空！'); }
 }
}
