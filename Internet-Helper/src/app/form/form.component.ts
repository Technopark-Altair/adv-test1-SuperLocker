import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  inputs:['rateRostel,rateQWERTY,rateMGTS,rateSpeedy,rateAvocad']
})
export class FormComponent {
  currentRate = 8;
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
    
  }
  provider:string;
  city: string;
  date1: string;
  date2: string;
  text: string;
  error: string;

  ngOnInit() {
  }
  rateTo() {
    if(this.provider='Ростелеком'){
      localStorage.setItem('rateRostel', localStorage.getItem('rateRostel') + this.currentRate)
    }else if(this.provider='QWERTY'){
      localStorage.setItem('rateQWERTY', localStorage.getItem('rateQWERTY') + this.currentRate)
    }else if(this.provider='МГТС'){
      localStorage.setItem('rateMGTS', localStorage.getItem('rateMGTS') + this.currentRate)
    }else if(this.provider='Авокадо'){
      localStorage.setItem('rateAvocad', localStorage.getItem('rateAvocad') + this.currentRate)
    }else if(this.provider='Спидилайн'){
      localStorage.setItem('rateSpeedy', localStorage.getItem('rateSpeedy') + this.currentRate)
    }
  }
  addText() {
    this.error ='Провайдер: '+ this.provider + '|' + 'Город: ' + this.city + '|' + 'Дата: ' + this.date1 + '|' + 'Время: ' + this.date2 + '|' + 'Описание проблемы:' + this.text + '|' + 'Оценка:'  + this.currentRate + '|' + '--------------' + '|' 
    localStorage.setItem('errors', localStorage.getItem('errors') + this.error)
    
  }
}