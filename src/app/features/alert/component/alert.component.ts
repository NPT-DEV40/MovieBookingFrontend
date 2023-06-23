import { Component, Input, OnInit } from '@angular/core';
import { Alert, AlertType } from '../interfaces/alert';
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { NavigationStart, Route, Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];

  alertSubscription!: Subscription;
  routeSubcription!: Subscription;

  constructor(private router: Router, private alertService : AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService.onAlert(this.id)
    .subscribe(alert => {
      if(!alert.message) {
        this.alerts= this.alerts.filter(x => x.keepAfterRouteChange);

        this.alerts.forEach(x => delete x.keepAfterRouteChange);
        return;
      }

      this.alerts.push(alert);

      if(alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });

    this.routeSubcription = this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    })
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    this.routeSubcription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if(!this.alerts.includes(alert)) {
      return;
    }

    if(this.fade) {
      alert.fade = true;

      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 200);

    } else {
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if(!alert) return;

    const classes = ["alert", "alert-dismissible"];

    const alertTypeClass = {
      [AlertType.Success]: "alert-success",
      [AlertType.Error]:"alert-danger",
      [AlertType.Info]:"alert-info",
      [AlertType.Warning]:"alert-warning"
    }

    if(alert.type !== undefined) {
      classes.push(alertTypeClass[alert.type]);
    }

    if(alert.fade) {
      classes.push("fade");
    }

    return classes.join(' ');
  }
}
