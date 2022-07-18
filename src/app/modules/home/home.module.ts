import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { route, HomeRouting } from './home.routing';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";
import { BrowserModule } from "@angular/platform-browser";
import { MainService } from "src/app/services/main.service";


@NgModule({
  declarations: [route],
  imports: [
    HomeRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    RippleModule,
    DialogModule,
    ToastModule

  ], providers: [MainService, DialogService, DynamicDialogRef, MessageService],
  exports: []
})
export class HomeModule {
  constructor() { }
}
