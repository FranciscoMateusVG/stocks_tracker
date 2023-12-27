'use server'
import prisma from './db'

export async function create() {
  prisma.stock
    .create({
      data: {
        name: 'test',
        type: 'acaoCapital'
      }
    })
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
