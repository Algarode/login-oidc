import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { Constants } from '../constants';

@Injectable({providedIn: 'root'})
export class AuthService {

    private _userManager: UserManager;
    private _user: User;

    constructor() {
        const stsSettings = {
            authority: Constants.stsAuthority,
            client_id: Constants.clientId,
            redirect_uri: `${Constants.clientRoot}signin-callback`,
            scope: 'openid profile projects-api',
            response_type: 'code',
            post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`
        };
        this._userManager = new UserManager(stsSettings);
    }
    
}