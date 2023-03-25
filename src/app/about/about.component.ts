import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutus =
    'At Beyond The Shelf, we understand the joy of finding good, quality literature to read. We believe that books are a window into the world, and an escape from the rigors of reality. Our mission is to help others discover new worlds, new experiences, and new ideas - and to help you step outside of the everyday monotony of life. And, most importantly, we believe that the written word is for everyone - not just the elite few.';

  ngOnInit(): void {}
}
