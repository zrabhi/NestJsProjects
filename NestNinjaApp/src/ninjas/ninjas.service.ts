import { Injectable } from "@nestjs/common";
import { CreateNinjaDto } from "./dto/create-ninja.dto";
import { UpdateNinjaDto } from "./dto/update-ninja.dto";
@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: "Ninja 1",
      weapon: "starts",
    },
    {
      id: 1,
      name: "Ninja 1",
      weapon: "nunchucks",
    },
  ];

  getWeaopn(weapon?: "starts" | "nunchucks") {
    if (weapon) return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) throw new Error("Ninja not found");
    return ninja;
  }
  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Math.random() * 100,
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }
  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    console.log(updateNinjaDto);
    
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) return { ...ninja, ...updateNinjaDto };
      else {
        return ninja;
      }
    });
    return this.getNinja(id);
  }
  removeNinja(id: number) {
    const ninja = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return ninja;
  }
}
