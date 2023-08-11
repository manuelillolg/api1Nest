import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Hace que solo se coja del body los datos que queremos aunque el usuario envíe más
      whitelist: true, 

       //Hace que si se envía info de más le salga un error al usuari para que solo envíe lo que nosotros queremos
      forbidNonWhitelisted: true,
    }),
  )
  await app.listen(3000);
}
bootstrap();
