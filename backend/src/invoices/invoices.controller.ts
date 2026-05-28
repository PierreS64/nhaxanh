import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto, @CurrentUser() user: any) {
    return this.invoicesService.create(createInvoiceDto, user.id, user.role);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.invoicesService.findAll(user.id, user.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: any) {
    return this.invoicesService.findOne(id, user.id, user.role);
  }

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto, @CurrentUser() user: any) {
    return this.invoicesService.update(id, updateInvoiceDto, user.id, user.role);
  }

  @Roles(Role.LANDLORD, Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.invoicesService.remove(id, user.id, user.role);
  }

  @Patch(':id/pay')
  payInvoice(@Param('id') id: string, @Body('paymentMethod') paymentMethod: string, @CurrentUser() user: any) {
    return this.invoicesService.payInvoice(id, paymentMethod, user.id, user.role);
  }
}
