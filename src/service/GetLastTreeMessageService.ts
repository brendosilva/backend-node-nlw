import prismaCliente from "../prisma"
import prismaClient from "../prisma"

class GetLastTreeMessageService {
  async execute(){
    const messages = await prismaCliente.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    })

    return messages
  }
}

export {GetLastTreeMessageService}