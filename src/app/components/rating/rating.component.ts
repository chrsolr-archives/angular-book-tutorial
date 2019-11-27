import { Component, Input } from '@angular/core'

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() rating = 0
  @Input() numberOfReviews = 0

  onClick(value) {
    this.rating = value
  }
}
