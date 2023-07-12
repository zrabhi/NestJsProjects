import { CreateNinjaDto } from "./dto/create-ninja.dto";
import { NinjasService } from "./ninjas.service";
import { UpdateNinjaDto } from "./dto/update-ninja.dto";
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getNinjasUser(weapon?: "starts" | "nunchucks"): {
        id: number;
        name: string;
        weapon: string;
    }[];
    GetOneNinjasUser(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
    CreateNinjasUser(createNinjaDto: CreateNinjaDto): {
        id: number;
        name: string;
        weapon: "starts" | "nunchucks";
    };
    UpdateNinjasUser(id: string, updateNinjaDto: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    DeleteNinjasUser(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
}
