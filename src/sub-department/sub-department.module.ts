import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubDepartmentController } from "./sub-department.controller";
import { SubDepartment } from "./sub-department.entity";
import { SubDepartmentService } from "./sub-department.service";

@Module({
    imports: [TypeOrmModule.forFeature([SubDepartment])],
    controllers: [SubDepartmentController],
    providers: [SubDepartmentService]
})

export class SubDepartmentModule {}