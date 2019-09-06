import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from "firebase";

@Injectable()
export class CanActivateGuard implements CanActivate {
    canActivate() {

        if (firebase.auth().currentUser) {
            return true;
        } else {
        }
        return false;
    }
}