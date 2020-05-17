import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredtitle="";
  enteredcontent="";
  OnAddPost(){
  const Post = { title: this.enteredtitle , content: this.enteredcontent};
  }
  constructor() { }

  ngOnInit(): void {
  }

}
