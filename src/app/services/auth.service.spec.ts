import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return token after user login', () => {
    const expectedResponse = {
      token: 'generated-token',
    };

    const responseToken = {
      token: 'generated-token',
    };

    service
      .login({ email: 'example@mail.com', password: 'strongPassword' })
      .subscribe((res) => {
        expect(res).toEqual(expectedResponse);
      });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${environment().apiURL}/login`,
    });

    req.flush(responseToken);
  });

  it('should return the user created', () => {
    const expectedResponse = {
      username: 'john',
      email: 'john@example.com',
    };

    const responseUser = {
      username: 'john',
      email: 'john@example.com',
    };

    service
      .register({
        username: 'john',
        email: 'example@mail.com',
        password: 'strongPassword',
      })
      .subscribe((res) => {
        expect(res).toEqual(expectedResponse);
      });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${environment().apiURL}/register`,
    });
    req.flush(responseUser);
  });
});
