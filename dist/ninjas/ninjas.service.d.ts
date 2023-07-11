import { CreateNinjaDto } from "./dto/create-ninja.dto";
import { UpdateNinjaDto } from "./dto/update-ninja.dto";
export declare class NinjasService {
    private ninjas;
    getWeaopn(weapon?: "starts" | "nunchucks"): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    createNinja(createNinjaDto: CreateNinjaDto): {
        id: number;
        name: string;
        weapon: "starts" | "nunchucks";
    };
    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    removeNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
}
