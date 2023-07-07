import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/users/users.model';
import { ROLES_KEY } from './authz.model';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) return true;

        const { user } = context.switchToHttp().getRequest();
        const hasAccess = requiredRoles.some((role) =>
            user.roles?.includes(role),
        );

        if (hasAccess) return true;

        throw new ForbiddenException();
    }
}
