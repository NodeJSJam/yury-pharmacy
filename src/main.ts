import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './configurations/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(AppConfigService).port;

  await app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
}
bootstrap();
