import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  peso:any;
  altura:any;
  imc:any;
  status:any;
  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  async enviadadosModal(){
    console.log(this.peso);
    console.log(this.altura);
    this.imc=this.peso/(this.altura*this.altura);
    console.log(this.imc);
    this.imc=this.imc.toFixed(2);
    if(this.imc<17){
      this.status="Muito abaixo do peso";
    }
    if(this.imc >=17 && this.imc <=18.49){
      this.status="Abaixo do peso";
    }
    if(this.imc >=18.5 && this.imc <=24.99){
      this.status="Peso normal";
    }
    if(this.imc >=25 && this.imc <=29.99){
      this.status="Levemente acima do peso";
    }
    if(this.imc >30){
      this.status="Obesidade";
    }

    console.log(this.status);

    const alert = await this.alertController.create({
      header: 'Seu índice de massa corporal é:',
      subHeader: this.imc,
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



