import { PrismaClient } from '@prisma/client'
import { join } from '@prisma/client/runtime/library';
const prisma = new PrismaClient()
async function main() {
    const accountSeedFile = join(process.cwd(), './prisma/seeds/data.csv');
    const accountSeedPromise = prisma.$executeRaw`
    COPY "accounts"(id, name, bank)
    FROM ${accountSeedFile}
    DELIMITER ','
    CSV HEADER;
    `;

    const [accountsResult] = await Promise.all([accountSeedPromise]);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })