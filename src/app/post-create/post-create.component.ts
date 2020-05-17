import { Component, OnInit , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredtitle="";
  enteredcontent="";
  date:"";
   @Output() PostCreated = new EventEmitter();
  OnAddPost(){
  const Post = { title: this.enteredtitle , content: this.enteredcontent , date: this.date};

  this.PostCreated.emit(Post);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
