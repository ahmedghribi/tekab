import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const ALLOWED_CORS_ORIGIN = "http://localhost:3000/";
  // Allow requests from frontend.
  app.enableCors({
    origin: ALLOWED_CORS_ORIGIN,
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
