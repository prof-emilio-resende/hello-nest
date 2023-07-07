import { Module } from '@nestjs/common';
import { AuthzService } from './authz.service';

@Module({
    providers: [AuthzService],
})
export class AuthzModule {}
