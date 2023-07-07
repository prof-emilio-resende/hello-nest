import { Module } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.svc';
import { ImcCalculatorController } from './imc.calculator.ctrl';
import { ImcCalculatorControllerV2 } from './imc.calculatorv2.ctrl';

@Module({
    imports: [],
    controllers: [ImcCalculatorController, ImcCalculatorControllerV2],
    providers: [ImcCalculatorService],
})
export class ImcCalculatorModule {}
