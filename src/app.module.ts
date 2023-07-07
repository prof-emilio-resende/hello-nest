import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ImcCalculatorModule } from './imc/imc.calculator.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ImcCalculatorController } from './imc/imc.calculator.ctrl';
import { ImcCalculatorControllerV2 } from './imc/imc.calculatorv2.ctrl';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthzModule } from './authz/authz.module';

@Module({
    imports: [ImcCalculatorModule, AuthModule, UsersModule, AuthzModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(ImcCalculatorControllerV2, ImcCalculatorController);
    }
}
