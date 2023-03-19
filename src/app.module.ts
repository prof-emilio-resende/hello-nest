import { Module } from '@nestjs/common';
import { ImcCalculatorModule } from './imc/imc.calculator.module';

@Module({
  imports: [ImcCalculatorModule],
})
export class AppModule {}
