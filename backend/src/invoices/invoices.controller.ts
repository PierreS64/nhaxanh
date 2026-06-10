import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post('webhook')
  async handleWebhook(@Body() webhookBody: any) {
    return this.invoicesService.handlePayosWebhook(webhookBody);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.LANDLORD, Role.ADMIN)
  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto, @CurrentUser() user: any) {
    return this.invoicesService.create(createInvoiceDto, user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('admin/unsettled')
  getUnsettledInvoices(@CurrentUser() user: any) {
    return this.invoicesService.getUnsettledInvoices(user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll(@CurrentUser() user: any) {
    return this.invoicesService.findAll(user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: any) {
    return this.invoicesService.findOne(id, user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.LANDLORD, Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto, @CurrentUser() user: any) {
    return this.invoicesService.update(id, updateInvoiceDto, user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.LANDLORD, Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.invoicesService.remove(id, user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id/pay')
  payInvoice(@Param('id') id: string, @Body('paymentMethod') paymentMethod: string, @CurrentUser() user: any) {
    return this.invoicesService.payInvoice(id, paymentMethod, user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post(':id/payment-link')
  generatePaymentLink(@Param('id') id: string, @CurrentUser() user: any) {
    return this.invoicesService.generatePaymentLink(id, user.id, user.role);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post(':id/settle')
  settleInvoice(@Param('id') id: string, @CurrentUser() user: any) {
    return this.invoicesService.settleInvoice(id, user.role);
  }
}
