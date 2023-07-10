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
@Controller("ninjas")
export class NinjasController {
  @Get()
  getNinjasUser(@Query("type") type: string) {
    console.log("In Get All Request");

    return [type];
  }
  @Get(":id")
  GetOneNinjasUser(@Param("id") id: string) {
    console.log("In Get Request");
    return id;
  }
  @Post()
  CreateNinjasUser(@Body() createNinjaDto: CreateNinjaDto) {
    console.log("In Post Request");
    return { name: createNinjaDto.name };
  }
  @Put(":id")
  UpdateNinjasUser(@Param("id") id: string) {
    console.log("In Put Request");
    return id;
  }
  @Delete(":id")
  DeleteNinjasUser(@Param("id") id: string) {
    console.log("In Delete Request");
    return id;
  }
}

//Get /ninjas --> []
// GET /ninjas/:id ---> {...}
// POST /ninjas
// PUT /ninjas/:id ---> {...}
// DELETE /ninjas/:id
