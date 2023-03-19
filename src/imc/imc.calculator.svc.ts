import { Injectable } from '@nestjs/common';

@Injectable()
export class ImcCalculatorService {
    getTable() {
        return {
            "magreza": 0.00,
            "normal": 18.50,
            "sobrepeso": 24.90,
            "obesidade": 30.00,
        }
    }
}