import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { Request } from 'express';
import { Key } from '@common/decorators/metadata.decorator';
import { ClassUserRepository } from '@modules/class-user/class-user.repository';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly classUserRepository: ClassUserRepository,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request>();

    const requiredRoles = this.reflector.get<Role[]>(
      Key.ROLES,
      context.getHandler(),
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const userId = request['user'];
    const classId = request.params['c_id'];

    if (!userId || !classId) {
      throw new UnauthorizedException(
        'Invalid user or class id.',
      );
    }

    const u_id = BigInt(userId);
    const c_id = BigInt(classId as string);

    const classUser =
      await this.classUserRepository.getClassUserInfo(
        u_id,
        c_id,
      );

    if (!classUser) {
      throw new UnauthorizedException(
        'No user found with the provided class id.',
      );
    }

    return requiredRoles.includes(classUser.role);
  }
}
