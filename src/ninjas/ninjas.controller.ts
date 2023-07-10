import { Controller, Get } from '@nestjs/common';

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
}

//Get /ninjas --> []
// GET /ninjas/:id ---> {...}
// POST /ninjas
// PUT /ninjas/:id ---> {...}
// DELETE /ninjas/:id 