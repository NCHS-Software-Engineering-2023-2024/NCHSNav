import { PrismaClient } from '@prisma/client'
import csv from 'csvtojson';

const prisma = new PrismaClient();

async function main() {
  // Convert CSV to JSON
  const jsonArray = await csv().fromFile("prisma/seeds/data.csv");

  // Import data into Prisma database
  for (const data of jsonArray) {
    console.log(data)
    await prisma.courses.create({
      data: {
        period: data.period,
        courseID: data.id,
        section: data.section,
        className: data.class_name,
        lastName: data.teacher_lastname,
        firstName: data.teacher_firstname,
        email: data.teacher_email,
        room: data.room,
      },
    });
  }

  console.log('Data imported successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });