import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule  } from '@nestjs/typeorm'
import { Category } from './category/category.model';

@Module({
  imports: [
    CategoryModule,
    TypeOrmModule.forRoot( {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'fpf@1212',
      database: 'nest_quickstart',
      schema: 'aula',
      entities: [Category]
    })
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
