import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-store',
  templateUrl: './comp-store.component.html',
  styleUrls: ['./comp-store.component.scss']
})
export class CompStoreComponent implements OnInit {

  cardcontent = [
    {
      title:'Blog/Article',
      sectitle: 'from ₹500',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Newsletter/E-mailer',
      sectitle: 'from ₹1000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Whitepaper',
      sectitle: 'from ₹2000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'e-book',
      sectitle: 'from ₹1000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Report/Guide',
      sectitle: 'from ₹1000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Product Description',
      sectitle: 'from ₹500',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Website Content',
      sectitle: 'from ₹1000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Video Script',
      sectitle: 'from ₹1000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Company Profile/Brouchure',
      sectitle: 'from ₹2000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
    {
      title:'Press Release',
      sectitle: 'from ₹2000',
      content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
