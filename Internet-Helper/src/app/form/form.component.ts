import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
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
  public article: object;
  provider:string;
  city: string;
  date1: string;
  date2: string;
  text: string;
  error: string;

  ngOnInit() {
  }
  addText() {
    this.error = this.provider + '|' + this.city + '|' + this.date1 + '|' + this.date1 + '|' + this.text + '|' + this.currentRate + '-----' + '|' 
    localStorage.setItem('articles', localStorage.getItem('articles') + this.error)
  }
}