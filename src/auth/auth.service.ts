import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIp() {
    return { msg: 'signIn' };
  }

  signUp() {
    return { msg: 'signUp' };
  }
}
