import {
    Body,
    Controller,
    Get,
    Post,
    Render,
    UseGuards,
    VERSION_NEUTRAL,
} from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.svc';
import { ImcCalculatorRequest } from './requests/Imc.calculator.request';
import { ImcCalculatorResponse } from './requests/imc.calculator.response';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/authz/authz.model';
import { Role } from 'src/users/users.model';
import { RolesGuard } from 'src/authz/authz.roles.guard';

@UseGuards(AuthGuard, RolesGuard)
@Controller({
    version: ['2', VERSION_NEUTRAL],
    path: 'imc',
})
export class ImcCalculatorControllerV2 {
    constructor(private readonly imcCalcSvc: ImcCalculatorService) {}

    @Roles(Role.Reader)
    @Get('table')
    getHello(): object {
        return this.imcCalcSvc.getTable();
    }

    @Get('table/html')
    @Render('imc-table.hbs')
    getTableHtml() {
        return { data: this.imcCalcSvc.getTable() };
    }

    @Roles(Role.Writer)
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
