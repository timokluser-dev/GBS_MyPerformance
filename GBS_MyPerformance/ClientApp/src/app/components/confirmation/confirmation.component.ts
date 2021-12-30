import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  @Input() show = false;

  @Input() header = 'Sind Sie sicher?';
  @Input() text!: string;
  @Input() buttonText!: string;
  @Input() buttonClass!: string;


  @Output() close = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onConfirm() {
    this.confirm.emit();
  }

  onClose() {
    this.close.emit();
  }
}
