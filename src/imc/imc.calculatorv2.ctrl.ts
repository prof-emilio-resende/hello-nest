import {
    Body,
    Controller,
    Get,
    Post,
    Render,
    VERSION_NEUTRAL,
} from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.svc';
import { ImcCalculatorRequest } from './requests/Imc.calculator.request';
import { ImcCalculatorResponse } from './requests/imc.calculator.response';

@Controller({
    version: ['2', VERSION_NEUTRAL],
    path: 'imc',
})
export class ImcCalculatorControllerV2 {
    constructor(private readonly imcCalcSvc: ImcCalculatorService) {}

    @Get('table')
    getHello(): object {
        return this.imcCalcSvc.getTable();
    }

    @Get('table/html')
    @Render('imc-table.hbs')
    getTableHtml() {
        return { data: this.imcCalcSvc.getTable() };
    }

    @Post('calculate')
    calculateImc(@Body() imcCalcRequest: ImcCalculatorRequest) {
        console.log('calling calculate v2');
        return this.imcCalcSvc.calculate(
            imcCalcRequest.weight,
            imcCalcRequest.height,
        );
    }

    @Get('calculate/html')
    @Render('imc-calculate.hbs')
    getCalculateImcHtml() {
        return { data: {} as ImcCalculatorResponse };
    }

    @Post('calculate/html')
    @Render('imc-calculate.hbs')
    calculateImcHtml(@Body() imcCalcRequest: ImcCalculatorRequest) {
        return {
            data: this.imcCalcSvc.calculate(
                imcCalcRequest.weight,
                imcCalcRequest.height,
            ),
        };
    }
}
