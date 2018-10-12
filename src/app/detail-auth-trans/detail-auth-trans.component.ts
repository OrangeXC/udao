import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-auth-trans',
  templateUrl: './detail-auth-trans.component.html',
  styleUrls: ['./detail-auth-trans.component.css']
})

export class DetailAuthTransComponent {
  public isCollapsed = true;

  @Input() ec21: any;
  @Input() collins: any;
}
