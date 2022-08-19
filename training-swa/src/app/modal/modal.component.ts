import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() message?: string = undefined;
  @Input() isOpen = false;
  @Output() handleYes = new EventEmitter();
  @Output() handleNo = new EventEmitter();

  ngOnInit() {}

  onNo = () => {
    this.handleNo.emit();
  }

  onYes = () => {
    this.handleYes.emit();
  }
}
