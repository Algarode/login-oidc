import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';

@Injectable({providedIn: 'root'})
export class AuthService {

    private _userManager: UserManager;
    private _user: User;

    constructor() { }
    
}