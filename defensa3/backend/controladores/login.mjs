import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const login = async (req, res) => {
    const {user, password} = req.body;

    const verificar = await prisma.usuarios.findFirst({
        where: {user: user, password: password}
    });

    if (verificar) {
        console.log("logueao")
        return res.status(200).json(verificar)
    } else {
        console.log("no logueao");
        return res.status(500).json({msg: "algo falló en la ejecución"});
    }
}