import { AbstractMenuServiceService, MenuServiceService } from './menu/menu-service.service';
import { MenuComponent } from './menu/menu.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.service';

export * from './menu/menu.component';
export * from './menu/menu-service.service';
export * from './menu/menu-item';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    MenuComponent
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    MenuComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService, 
        { provide: AbstractMenuServiceService, useClass: MenuServiceService}]
    };
  }
}
