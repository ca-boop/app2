import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  temp:any;
  celsius:any;
  status:any;
  constructor(public modalController: ModalController,public alertController: AlertController) {}

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async enviadadosModal(){
    console.log(this.temp);
    console.log(this.temp);
    this.celsius=(this.temp - 32)* 5/9;
    console.log(this.celsius);
    this.celsius=this.celsius.toFixed(2);
    if(this.celsius<=10){
      this.status="Muito Frio";
    }
    if(this.celsius >=10 && this.celsius<=30){
      this.status="Quente";
    }
    if(this.celsius >=31 && this.celsius <=40){
      this.status="Muito quente";
    }
   
    console.log(this.status);

    const alert = await this.alertController.create({
      header: 'A temperatura em celsius é:',
      subHeader: this.celsius,
      message: this.status,
      buttons: [
        {
          text:'ok',
          handler:()=>{
            this.closeModal();
          }
        }
      ]
    });

    await alert.present();

  }

  
}
