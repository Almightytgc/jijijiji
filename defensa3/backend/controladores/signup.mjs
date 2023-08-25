import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signup = async (req, res) => {
    const {user, password} = req.body

    const registrar = await prisma.usuarios.create({
        data: {user: user, password: password}
    })

    if (registrar) {
        return res.status(200).json(registrar)
    } else {
        return res.status(500).json({msg: "error en la ejecución"})
    }
}