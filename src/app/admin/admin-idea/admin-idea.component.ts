import { Component, OnInit } from '@angular/core';
import { AdminIdeaService } from '../../services/admin-idea-service/admin-idea.service';
import { ADMIN_IDEAS_ADD_ENDPOINT, ADMIN_IDEAS_ENDPOINT, ADMIN_PROJECT_ENDPOINT, FREE_IDEAS_API_URL } from '../../registration.const';
import { Router } from '@angular/router';
import { AdminLoginService } from '../../services/admin-login-service/admin-login.service';

@Component({
  selector: 'app-admin-idea',
  templateUrl: './admin-idea.component.html',
  styleUrls: ['./admin-idea.component.css']
})
export class AdminIdeaComponent implements OnInit {
  ideas = [];

  constructor(private router: Router, private adminIdeaService: AdminIdeaService, private adminLoginService: AdminLoginService) {
  }

  ngOnInit() {
    this.adminIdeaService.getIdeasData(FREE_IDEAS_API_URL)
      .subscribe(data => {
        this.ideas = data;
      });
  }

  onSelect(description, city, category, organization, state, projectId, ideaId) {
    this.router.navigate([
      '/admin/ideas/update',
      this.b64EncodeUnicode(description),
      this.b64EncodeUnicode(city),
      this.b64EncodeUnicode(category),
      this.b64EncodeUnicode(organization),
      this.b64EncodeUnicode(state),
      this.b64EncodeUnicode(projectId),
      this.b64EncodeUnicode(ideaId)
    ]);
  }

  b64EncodeUnicode(param) {
    return btoa(encodeURIComponent(param).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      }));
  }
}
