import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-examples',
  templateUrl: './detail-examples.component.html',
  styleUrls: ['./detail-examples.component.css']
})

export class DetailExamplesComponent {
  @Input () blngSentsPart: any;
  @Input () authSentsPart: any;
  @Input () mediaSentsPart: any;
}
