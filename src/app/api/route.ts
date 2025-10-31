import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export async function Post(req: Request){
    try {
        const { userId } = auth()
        if(!userId){
            return new NextResponse("User not authenticated", {status: 400})
        }

        const {title, description, templateUsed} = await req.json()

        const createOutput = await db.aiOutput.create({
            data:{
                userId: userId,
                title: title,
                description: description,
                templateUsed: templateUsed
            }
        })

        revalidatePath("/")
        return NextResponse.json(createOutput, {status:200})


    } catch (error) {
        return new NextResponse("New Output Error", {status:500})
    }

}