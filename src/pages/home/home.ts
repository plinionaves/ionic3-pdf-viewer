import { Component } from '@angular/core';
import { Modal, ModalController, NavController } from 'ionic-angular';

import { PdfViewerPage } from './../pdf-viewer/pdf-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) { }

  onOpenPDF(): void {
    let modal: Modal = this.modalCtrl.create(PdfViewerPage, {
      displayData: {
        pdfSource: 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf'
      }
    });
    modal.present();
  }

}
