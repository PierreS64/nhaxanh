import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Post()
  create(@Body() createContractDto: CreateContractDto, @CurrentUser() user: any) {
    return this.contractsService.create(createContractDto, user);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.contractsService.findAll(user.id, user.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: any) {
    return this.contractsService.findOne(id, user.id, user.role);
  }

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractDto: UpdateContractDto, @CurrentUser() user: any) {
    return this.contractsService.update(id, updateContractDto, user.id, user.role);
  }

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.contractsService.remove(id, user.id, user.role);
  }
}
