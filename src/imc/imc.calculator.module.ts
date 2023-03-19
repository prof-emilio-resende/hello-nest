import { Module } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.svc';
import { ImcCalculatorController } from './imc.calculator.ctrl';

@Module({
  imports: [],
  controllers: [ImcCalculatorController],
  providers: [ImcCalculatorService]
})
    
export class ImcCalculatorModule {}
