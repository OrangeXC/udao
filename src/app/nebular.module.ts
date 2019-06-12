import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbCardModule,
  NbSpinnerModule,
  NbListModule,
  NbTabsetModule,
  NbSidebarService
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  exports: [
    CdkTableModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbSpinnerModule,
    NbListModule,
    NbTabsetModule
  ]
})

export class NabularModule {}
export const NabularService = [
  NbSidebarService
];
