import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-transform',
  templateUrl: './detail-transform.component.html',
  styleUrls: ['./detail-transform.component.css']
})
export class DetailTransformComponent {
  @Input () phrs: any;
  @Input () syno: any;
  @Input () relWord: any;
}
