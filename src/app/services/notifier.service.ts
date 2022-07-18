import { Injectable } from "@angular/core";
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private _MessageService: MessageService) {

  }
  showSuccess(summaryText = 'Success', msg: string) {
    return this._MessageService.add({ severity: 'success', summary: summaryText, detail: msg });
  }
  showInfo(summaryText = "Info", msg: string) {
    return this._MessageService.add({ severity: 'info', summary: summaryText, detail: msg });
  }
  showError(summaryText = "Error", msg: string) {
    return this._MessageService.add({ severity: 'error', summary: summaryText, detail: msg });
  }
}
