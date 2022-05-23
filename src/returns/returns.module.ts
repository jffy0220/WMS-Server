import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReturnsController } from "./returns.controller";
import { Returns } from "./returns.entity";
import { ReturnsService } from "./returns.service";

@Module({
    imports: [TypeOrmModule.forFeature([Returns])],
    controllers: [ReturnsController],
    providers: [ReturnsService]
})

export class ReturnsModule {}