
import {MinLength, MaxLength, IsEnum} from 'class-validator'
export class CreateNinjaDto {
    @MinLength(1,{message: 'Not enough Length'})
    name : string;

    @IsEnum(['starts, nunchucks'], {message: 'Chose another weapon '})
    weapon : 'starts' | 'nunchucks';
}
