import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MaintenanceRequestsService } from './maintenance-requests.service';
import { CreateMaintenanceRequestDto } from './dto/create-maintenance-request.dto';
import { UpdateMaintenanceRequestDto } from './dto/update-maintenance-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role, MaintenanceStatus } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('maintenance-requests')
export class MaintenanceRequestsController {
  constructor(private readonly maintenanceRequestsService: MaintenanceRequestsService) {}

  @Roles(Role.TENANT, Role.ADMIN)
  @Post()
  create(@Body() createMaintenanceRequestDto: CreateMaintenanceRequestDto, @CurrentUser() user: any) {
    return this.maintenanceRequestsService.create(createMaintenanceRequestDto, user.id);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.maintenanceRequestsService.findAll(user.id, user.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: any) {
    return this.maintenanceRequestsService.findOne(id, user.id, user.role);
  }

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaintenanceRequestDto: UpdateMaintenanceRequestDto, @CurrentUser() user: any) {
    return this.maintenanceRequestsService.update(id, updateMaintenanceRequestDto, user.id, user.role);
  }

  @Roles(Role.TENANT, Role.LANDLORD, Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.maintenanceRequestsService.remove(id, user.id, user.role);
  }

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: MaintenanceStatus, @CurrentUser() user: any) {
    return this.maintenanceRequestsService.updateStatus(id, status, user.id, user.role);
  }
}
