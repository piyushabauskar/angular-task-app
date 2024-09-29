import {
  Component,
  computed,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { type User } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  // avatar =  input.required<string>()
  // name = input.required<string>()

  // imagePath =  computed(()=>{
  //   return 'assets/users/' + this.avatar()
  // })
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // console.log('Clicked!!!!')
    this.select.emit(this.user.id);
  }
}
