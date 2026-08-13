import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// من Prisma 7: رابط قاعدة البيانات بتاع الـ CLI (migrate/generate) بقى هنا
// بدل ما يكون جوه prisma/schema.prisma. الـ DIRECT_URL (الاتصال المباشر)
// أفضل هنا لأنه المستخدم أصلاً للـ migrations، ولو مش موجود بيستخدم DATABASE_URL.
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env.DIRECT_URL || process.env.DATABASE_URL || '',
  },
});
