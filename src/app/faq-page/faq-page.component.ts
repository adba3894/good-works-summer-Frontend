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
      {
        'title': '1. Question:\n ' +
          'How do I register my idea in “Do Good This Summer” page?',
        'description': 'Response:\n' +
          'Please press on “Register your job” here button and fill in the required fields. ' +
          'You will see success message and site administration will contact you once the idea will be approved.'
      },
      {
        'title': '2. Question:\n' +
          'How long will it take until my idea will be approved?',
        'description': 'Response:\n' +
        'Approval should not take longer than 3 working days.'
      },
      {
        'title': '3. Question:\n' +
          'How could I choose existing idea?',
        'description': 'Response:\n' +
          'Please visit “Ideas” tab were you can find categorized initiatives, ' +
          'you can assign it to yourself and fill in missing fields. If fields are entered correctly ' +
          'you will get success message and website admin will contact you once everything will be registered successfully.'
      },
      {
        'title': '4. Question:\n' +
          'Who should I contact if I have additional questions?',
        'description': 'Response:\n' +
          'Please send an email to info@dogoodthissummer.com'
      },
      {
        'title': '5. Question:\n' +
          'How long in advance I can register my team for an initiative?',
        'description': 'Response:\n' +
          'Please register your team no longer than six months in advance.'
      },
      {
        'title': '6. Question:\n' +
          'Who can participate in “Do Good This Summer” initiatives?',
        'description': 'Response:\n' +
          'Participants of “Do Good This Summer” initiatives can be all employees of “Swedbank” AB.'}
    ];

  }

}
