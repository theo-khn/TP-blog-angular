import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-blog-angular';

  posts = [
    {
     title: 'Poste 1' ,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit egestas est, et pharetra est suscipit quis. Suspendisse potenti. Integer fermentum mattis mauris. Quisque sit amet sapien sed erat dapibus pretium non in nibh. Vivamus id feugiat mi. In convallis felis eros, nec dignissim ligula euismod quis. In hac habitasse platea dictumst. Maecenas suscipit lacus a nisi tempus congue. Donec commodo pharetra nisi ut consequat. Nulla ipsum libero, ornare non euismod a, sodales ac massa. Aenean nibh dolor, faucibus sit amet ultrices in, blandit at lectus. Phasellus rutrum at nisl id efficitur. Cras a ligula at nibh pellentesque eleifend. Donec pharetra, justo at facilisis volutpat, nibh nunc fermentum urna, ut molestie lacus erat in ex. Donec vel dolor urna. Suspendisse eu diam ligula.',
    
    },
    {
      title: 'Poste 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit egestas est, et pharetra est suscipit quis. Suspendisse potenti. Integer fermentum mattis mauris. Quisque sit amet sapien sed erat dapibus pretium non in nibh. Vivamus id feugiat mi. In convallis felis eros, nec dignissim ligula euismod quis. In hac habitasse platea dictumst. Maecenas suscipit lacus a nisi tempus congue. Donec commodo pharetra nisi ut consequat. Nulla ipsum libero, ornare non euismod a, sodales ac massa. Aenean nibh dolor, faucibus sit amet ultrices in, blandit at lectus. Phasellus rutrum at nisl id efficitur. Cras a ligula at nibh pellentesque eleifend. Donec pharetra, justo at facilisis volutpat, nibh nunc fermentum urna, ut molestie lacus erat in ex. Donec vel dolor urna. Suspendisse eu diam ligula.',

    },
    {
      title: 'Poste 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit egestas est, et pharetra est suscipit quis. Suspendisse potenti. Integer fermentum mattis mauris. Quisque sit amet sapien sed erat dapibus pretium non in nibh. Vivamus id feugiat mi. In convallis felis eros, nec dignissim ligula euismod quis. In hac habitasse platea dictumst. Maecenas suscipit lacus a nisi tempus congue. Donec commodo pharetra nisi ut consequat. Nulla ipsum libero, ornare non euismod a, sodales ac massa. Aenean nibh dolor, faucibus sit amet ultrices in, blandit at lectus. Phasellus rutrum at nisl id efficitur. Cras a ligula at nibh pellentesque eleifend. Donec pharetra, justo at facilisis volutpat, nibh nunc fermentum urna, ut molestie lacus erat in ex. Donec vel dolor urna. Suspendisse eu diam ligula.',

    },

  ]

  

}
