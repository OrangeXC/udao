import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-auth-trans',
  templateUrl: './detail-auth-trans.component.html',
  styleUrls: ['./detail-auth-trans.component.css'],
  providers: [NgbRatingConfig]
})

export class DetailAuthTransComponent {
  public isCollapsed = true;

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  @Input() ec21
  @Input() collins
}
