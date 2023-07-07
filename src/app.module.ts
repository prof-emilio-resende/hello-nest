import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ImcCalculatorModule } from './imc/imc.calculator.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ImcCalculatorController } from './imc/imc.calculator.ctrl';
import { ImcCalculatorControllerV2 } from './imc/imc.calculatorv2.ctrl';

@Module({
    imports: [ImcCalculatorModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(ImcCalculatorControllerV2, ImcCalculatorController);
    }
}
