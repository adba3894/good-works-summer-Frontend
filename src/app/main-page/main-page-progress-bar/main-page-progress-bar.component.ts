import { Component, OnInit } from '@angular/core';
import { CATEGORY_API_URL, PROGRESS_BAR_DATA_URL } from '../../registration.const';
import { ProgressBarService } from '../../services/progress-bar-service/progress-bar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page-progress-bar',
  templateUrl: './main-page-progress-bar.component.html',
  styleUrls: ['./main-page-progress-bar.component.css']
})
export class MainPageProgressBarComponent implements OnInit {
  progress: number;

  constructor(private progressBarService: ProgressBarService, private progressBarHttp: HttpClient) { }

  ngOnInit() {
    this.progressBarService.getCounterData(PROGRESS_BAR_DATA_URL)
      .subscribe(data => {
        console.log(this.progress);
        this.progress = data;
      });
  }

}
