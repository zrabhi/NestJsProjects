import { CreateNinjaDto } from "./dto/create-ninja.dto";
export declare class NinjasController {
    getNinjasUser(type: string): string[];
    GetOneNinjasUser(id: string): string;
    CreateNinjasUser(createNinjaDto: CreateNinjaDto): {
        name: string;
    };
    UpdateNinjasUser(id: string): string;
    DeleteNinjasUser(id: string): string;
}
