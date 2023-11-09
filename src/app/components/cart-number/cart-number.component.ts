import {Component, OnDestroy} from '@angular/core';
import {CommunService} from "../../services/communservice/commun.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-number',
  template: `
    <div style="padding: 5px 5px;">
      <span class="badge-danger">{{count}}</span>
    </div>
  `,
  styleUrls: ['./cart-number.component.scss']
})
export class CartNumberComponent implements OnDestroy{

  count: number = 0;
  private subscriptionName: Subscription; //important to create a subscription

  constructor(private service : CommunService) {
    // subscribe to sender component messages
    this.subscriptionName= this.service.getUpdate().subscribe
    (message => { //message contains the data sent from service
      this.count ++;
    });

  }
  ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscriptionName.unsubscribe();
  }
}
