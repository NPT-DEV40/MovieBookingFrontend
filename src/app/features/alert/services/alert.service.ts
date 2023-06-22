import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();
  
  constructor() { }
}
