import { Injectable } from '@nestjs/common';
import { ImcCalculatorResponse } from './requests/imc.calculator.response';

function translateImc(imc) {
    if (imc < 18.5) return 'magreza';
    if (imc < 24.9) return 'normal';
    if (imc < 30.0) return 'sobrepeso';
    return 'obesidade';
}

@Injectable()
export class ImcCalculatorService {
    getTable() {
        return {
            magreza: 0.0,
            normal: 18.5,
            sobrepeso: 24.9,
            obesidade: 30.0,
        };
    }

    calculate(weight: number, height: number) {
        const imc = weight / height ** 2;
        const imcDescription = translateImc(imc);

        return {
            weight,
            height,
            imc,
            imcDescription,
        } as ImcCalculatorResponse;
    }
}
