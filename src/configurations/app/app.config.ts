import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  isProdaction: process.env.NODE_ENV === 'production',
}));
