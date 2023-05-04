import { CommonModule } from '@angular/common'
import { Input, NgModule, OnInit } from '@angular/core'
import { BackendErrorMessagesComponent } from './components/backendErrorMessages/backendErrorMessages.component'
import { BackendErrorsInterface } from '../../types/backendErrors.interface'

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}