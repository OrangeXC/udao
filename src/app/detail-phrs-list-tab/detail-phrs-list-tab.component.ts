import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-phrs-list-tab',
  templateUrl: './detail-phrs-list-tab.component.html',
  styleUrls: ['./detail-phrs-list-tab.component.css']
})

export class DetailPhrsListTabComponent {
  @Input() input: any;
  @Input() simple: any;
  @Input() ec: any;
}
