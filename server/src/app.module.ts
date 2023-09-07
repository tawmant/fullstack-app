import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CorsMiddleware } from "@nest-middlewares/cors";
import { TagModule } from "@app/tag/tag.module";
import { AppController } from "@app/app.controller";
import { MessageModule } from "@app/message/message.module";
import { AppService } from "@app/app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "@app/ormconfig";
import { UserModule } from "@app/user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TagModule,
    MessageModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes("*");
  }
}
