import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {
toggled: boolean = false;

subscriptionTypes: Observable<string[]>;
postError: boolean = false;
postErrorMessage: string = '';
userSettings: UserSettings = {
  name: null,
  emailOffers: null,
  interfaceStyle: null,
  subscriptionType: null,
  notes: null
};

viewModelUserSettings: UserSettings = { ...this.userSettings }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  toggleChanged($event : any) : void {
    this.toggled = $event.checked;
  }

  submit(form: NgForm) {
    console.log('form.valid: ', form.valid);

    if(form.valid) {
      this.dataService.postUserSettingsForm(this.viewModelUserSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      )
    } else {
      this.postError = true;
      this.postErrorMessage = 'Fix yo shit dawg';
    }
  }

  onBlur(name: NgModel): void {
    console.log(name.invalid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    //console.log('postError: ', this.postError);
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

}
