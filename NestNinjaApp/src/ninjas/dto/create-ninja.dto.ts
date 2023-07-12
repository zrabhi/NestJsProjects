
import {MinLength, MaxLength, IsEnum} from 'class-validator'
export class CreateNinjaDto {
    @MinLength(1,{message: 'NMin length is one word'})
    name : string;

    @IsEnum(['starts', 'nunchucks'], {message: 'Chose another weapon '})
    weapon : 'starts' | 'nunchucks';
}
