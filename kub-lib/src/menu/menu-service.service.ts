import { Injectable } from '@angular/core';


export class AbstractMenuServiceService {
    
        user: User;
}
    

@Injectable()
export class MenuServiceService extends AbstractMenuServiceService {

    user: User;

    constructor() { 
        super();
        this.user = { userName: "", roles: [] };
    }

}


export interface User {
    userName: string;
    roles: string[];
}