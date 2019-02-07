import { TestBed } from "@angular/core/testing";

import { githubrequestService } from "./github-request.service";

describe("githubrequestService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: githubrequestService = TestBed.get(githubrequestService);
    expect(service).toBeTruthy();
  });
});
