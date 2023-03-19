import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.svc';
import { ImcCalculatorRequest } from './requests/Imc.calculator.request';
import { ImcCalculatorResponse } from './requests/imc.calculator.response';

@Controller("imc")
export class ImcCalculatorController {
  constructor(private readonly imcCalcSvc: ImcCalculatorService) { }

  @Get("table")
  getHello(): object {
    return this.imcCalcSvc.getTable();
  }

  @Get("table/html")
  @Render("imc-table.hbs")
  getTableHtml() {
    return { data: this.imcCalcSvc.getTable() }
  }

  @Post("calculate")
  calculateImc(@Body() imcCalcRequest: ImcCalculatorRequest) {
    return this.imcCalcSvc.calculate(imcCalcRequest.weight, imcCalcRequest.height);
  }

  @Get("calculate/html")
  @Render("imc-calculate.hbs")
  getCalculateImcHtml() {
    return { data: {} as ImcCalculatorResponse };
  }

  @Post("calculate/html")
  @Render("imc-calculate.hbs")
  calculateImcHtml(@Body() imcCalcRequest: ImcCalculatorRequest) {
    return { data: this.imcCalcSvc.calculate(imcCalcRequest.weight, imcCalcRequest.height) };
  }
}
