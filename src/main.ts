import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const PORT = process.env.PORT
  const API_URL = process.env.API_URL

  const config = new DocumentBuilder()
  .setTitle('Pet Friendly API')
  .setDescription('Pet Friendly API Documentation')
  .setVersion('V.0.0.1')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs',app,document) 
  

  await app.listen(PORT || 3000,API_URL);
  console.log(`server is running on port: ${PORT}`)
  console.log("api document is on http://"+API_URL+":"+PORT+"/docs")
}
bootstrap();
