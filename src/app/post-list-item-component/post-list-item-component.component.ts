import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() unPost:Post;

  constructor() { 
  }


  ngOnInit() {
  }

  onAddLove()
  {
    this.unPost.loveIts += 1;
  }
 
  onAddDoNotLove()
  {
    this.unPost.loveIts -= 1;
  }

  getColor()
  {
    if (this.unPost.loveIts>0)
      return 'green';
    else if (this.unPost.loveIts===0)
      return 'grey';
    else 
      return 'red';

  }
}
  
