import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //
  home = 'Welcome to our Spring Sale on books! We`re offering great discounts on a variety of books from genres like fiction, non-fiction, romance, fantasy, mystery, science-fiction and more. Get up to 50% off on select books, plus get free shipping on orders over $50. Don’t miss out on this chance to stock up on your favorite titles at great prices. Hurry and shop now, our sale won`t last forever!';
  //
  offer = 'We offer a wide selection of books for readers of all ages, from classic novels to contemporary bestsellers. Our selection also includes books from a variety of genres, including fiction, non-fiction, children`s, fantasy, mystery, science-fiction, and more. In addition to books, we also offer a selection of magazines and audiobooks. We also offer helpful customer service and competitive prices to ensure that you get the best value for your money.'
  
  //Book 1
  Title = 'To Kill a Mockingbird'
  Author = 'Harper Lee'
  Publisher = 'J. B. Lippincott & Co.'
  Category = 'Southern Gothic fiction'
  Price = '$21.03'
  Desc = 'To Kill a Mockingbird is both a young girls coming-of-age story and a darker drama about the roots and consequences of racism and prejudice, probing how good and evil can coexist within a single community or individual.'

  //Book 2
   Title2 = '1984'
   Author2 = 'George Orwell'
   Publisher2 = 'Secker & Warburg'
   Category2 = 'Dystopian Social Science Fiction Novel'
   Price2 = '$7.48'
   Desc2 = ' 1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of "The Party", who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother.'

   //Book 3
   Title3 = 'Harry Potter and the Sorcerer’s Stone'
   Author3 = 'J.K. Rowling'
   Publisher3 = 'Bloomsbury.'
   Category3 = 'Fantasy Novel'
   Price3 = '$14.36'
   Desc3 = ' It is a story about Harry Potter, an orphan broughtup by his aunt and uncle because his parents were killed when hewas a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he"s a wizard..'

   //Book 4
   Title4 = 'The Lord of the Rings'
   Author4 = 'J.R.R. Tolkien'
   Publisher4 = 'Allen & Unwin'
   Category4 = ' Epic High-Fantasy Novel'
   Price4 = '$18.29'
   Desc4 = 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien"s extensive knowledge of philology and folklore.'


  
  constructor(private router: Router) {}

  goToCart(pageName:string):void{
      this.router.navigate([`${pageName}`]);

  }

  ngOnInit(): void {}
}



