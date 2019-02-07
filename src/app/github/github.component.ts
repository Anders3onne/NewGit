import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { HttpClient } from "@angular/common/http";
import { githubrequestService } from "../github-http/github-request.service";
import { Repository } from "../repository";
@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  providers: [githubrequestService],
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  Users: User;
  repos: Repository;
  addNew(user) {
    this.reposRequest.reposRequest(user);
    this.repos = this.reposRequest.repos;
    this.Users = new User(user.name);
  }
  constructor(
    private http: HttpClient,
    private reposRequest: githubrequestService
  ) {
    this.Users = new User("");
    this.repos = new Repository(0, 0, 0, new Date(), "", "");
  }

  ngOnInit() {}
}
