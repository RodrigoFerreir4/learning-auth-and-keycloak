import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8080/realms/realm-for-test/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: 'BBcLt8dy9jEBXV9ZaQeADf0g35k8puWh',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
