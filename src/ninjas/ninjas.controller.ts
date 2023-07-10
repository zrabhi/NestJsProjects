import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

    @Get()
    getNinjasUser()
    {
        console.log("hereee");
        
        return "Ninja User";        
    }
    @Get(':id')
    GetOneNinjasUser()
    {
        return []
    }
    @Post()
    CreateNinjasUser()
    {
        return [];
    }
    @Put(':id')
    UpdateNinjasUser()
    {
        return [];
    }
    @Delete(':id')
    DeleteNinjasUser()
    {
        return [];
    }
}

//Get /ninjas --> []
// GET /ninjas/:id ---> {...}
// POST /ninjas
// PUT /ninjas/:id ---> {...}
// DELETE /ninjas/:id 