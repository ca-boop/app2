import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: Tab3Page
    });
    return await modal.present();
  }


}
