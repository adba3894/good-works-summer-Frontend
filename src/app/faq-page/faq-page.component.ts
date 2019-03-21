import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  current = 0;
  items: Array<any>;


  constructor() {
  }

  ngOnInit() {

    this.items = [
      { 'title':
          'How do I register my idea in “Do Good This Summer” page?',
        'description':
          'Please press on “Register your job” here button and fill in the required fields. ' +
          'You will see success message and site administration will contact you once the idea will be approved.'
      },
      { 'title':
          'How long will it take until my idea will be approved?',
        'description':
        'Approval should not take longer than 3 working days.'
      },
      { 'title':
          'How could I choose existing idea?',
        'description':
          'Please visit “Ideas” tab were you can find categorized initiatives, ' +
          'you can assign it to yourself and fill in missing fields. If fields are entered correctly ' +
          'you will get success message and website admin will contact you once everything will be registered successfully.'
      },
      { 'title':
          'Who should I contact if I have additional questions?',
        'description':
          'Please send an email to info@dogoodthissummer.com'
      },
      { 'title':
          'How long in advance I can register my team for an initiative?',
        'description':
          'Please register your team no longer than six months in advance.'
      },
      { 'title':
          'Who can participate in “Do Good This Summer” initiatives?',
        'description':
          'Participants of “Do Good This Summer” initiatives can be all employees of “Swedbank” AB.'}
    ];

  }

}
