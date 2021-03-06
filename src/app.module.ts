import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { RecordsModule } from './records/records.module';

// const user = {
//   type: 'sqlite',
//   database: './db/8percent.db',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };
//
// const TransactionHistoryA = {
//   type: 'sqlite',
//   database: './db/TransactionHistoryA.db',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };
//
// const TransactionHistoryB = {
//   type: 'sqlite',
//   database: './db/TransactionHistoryB.db',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/8percent.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'odd',
      type: 'sqlite',
      database: './db/TransactionHistoryA.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'even',
      type: 'sqlite',
      database: './db/TransactionHistoryB.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    AccountsModule,
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
