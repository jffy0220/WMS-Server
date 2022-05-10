import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BinController } from "./bin.controller";
import { Bin } from "./bin.entity";
import { BinService } from "./bin.service";

@Module({
    imports: [TypeOrmModule.forFeature([Bin])],
    controllers: [BinController],
    providers: [BinService]
})

export class BinModule {}