import prisma from "../../../prisma/client";

export async function POST(req, res) {
  try {
    
    let data = await req.json()
    const newUser = await prisma.user.create({data:{
      name: data.name, 
      email: data.email, 
      password: data.password, 
      category: data.category
    }});
console.log(data)
    return new Response(newUser, {
      status: 200
    })

  } catch (error) {
    console.log("error", error)
  }

}
