import { Controller, Get } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.svc';

@Controller("imc")
export class ImcCalculatorController {
  constructor(private readonly imcCalcSvc: ImcCalculatorService) { }

  @Get("table")
  getHello(): object {
    return this.imcCalcSvc.getTable();
  }
}
