import prisma from "../../prisma/client";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, category, password } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        category,
        password,
      },
    });
    res.json(newUser);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
