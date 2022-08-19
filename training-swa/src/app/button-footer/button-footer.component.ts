import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  templateUrl: './button-footer.component.html',
  styleUrls: ['./button-footer.component.scss']
})
export class AppButtonFooterComponent implements OnInit {
  @Input() label: any;
  @Input() className: any;
  @Input() iconClasses: any;
  @Input() item: any;
  @Input() dataId: any;

  @Output() clicked = new EventEmitter<any>();

  ngOnInit() {}

  handleClick() {
    this.clicked.emit(this.item);
  }

}
