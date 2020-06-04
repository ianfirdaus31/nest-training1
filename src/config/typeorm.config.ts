import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '12345',
	database: 'nest-training-1',
	entities: [`${__dirname}/../**/*.entity.ts`],
	synchronize: true
}