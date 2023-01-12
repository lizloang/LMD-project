// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const draga = await prisma.draga.findUnique({
    where: {
      id: 1,
    },
  });

  console.log(draga);
  res.status(200).json(draga);
}
