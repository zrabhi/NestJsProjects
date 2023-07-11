import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CreateNinjaDto } from "./dto/create-ninja.dto";
import { NinjasService } from "./ninjas.service";
import { UpdateNinjaDto } from "./dto/update-ninja.dto";
@Controller("ninjas")
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjasUser(@Query("weapon") weapon?: "starts" | "nunchucks") {
    console.log("In Get All Request");
    return this.ninjasService.getWeaopn(weapon);
  }
  @Get(":id")
  GetOneNinjasUser(@Param("id") id: string) {
    console.log("In Get Request");
    return this.ninjasService.getNinja(+id);
  }
  @Post()
  CreateNinjasUser(@Body() createNinjaDto: CreateNinjaDto) {
    console.log("In Post Request");
    return this.ninjasService.createNinja(createNinjaDto);
  }
  @Put(":id")
  UpdateNinjasUser(@Param("id") id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    console.log("In Put Request, id is => ", +id, updateNinjaDto);
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }
  @Delete(":id")
  DeleteNinjasUser(@Param("id") id: string) {
    console.log("In Delete Request");
    return this.ninjasService.removeNinja(+id);
  }
}

//Get /ninjas --> []
// GET /ninjas/:id ---> {...}
// POST /ninjas
// PUT /ninjas/:id ---> {...}
// DELETE /ninjas/:id
