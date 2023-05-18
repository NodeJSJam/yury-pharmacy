module.exports = {
  type: 'postgres',
  username: 'root',
  password: 'password',
  database: 'pharmacy',
  host: 'localhost',
  port: 5432,
  entities: ['src/**/*.entity{.ts,.js}'],
  seeds: ['src/seeding/seeds/**/*{.ts,.js}'],
  factories: ['src/seeding/factories/**/*{.ts,.js}'],
};
