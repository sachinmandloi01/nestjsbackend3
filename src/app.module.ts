import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sachinmandloi01:i3St2w99RRzjb8fR@cluster0.efjbfhp.mongodb.net/eCommerce?retryWrites=true&w=majority&appName=Cluster0', {}),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads', // This is the base URL path where the files will be served from
    }),
    UserModule,
    ProductModule,
    AuthModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
