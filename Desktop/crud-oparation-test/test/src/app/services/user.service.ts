import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Raj',
      lastName: 'yadav',
      roll:111
    },
    {
      id: 2,
      firstName: 'supriya',
      lastName: 'barne',
      roll:112
    },
    {
        id: 3,
        firstName: 'arati',
        lastName: 'yadav',
        roll:113
      },
      {
        id: 3,
        firstName: 'swapnil',
        lastName: 'mane',
        roll:114
      }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
