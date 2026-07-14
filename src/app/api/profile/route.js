import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

export async function PUT(req) {
    try {
        const body = await req.json();

        await client.connect();

        const db = client.db("bibliocraft");

        await db.collection("user").updateOne(
            {
                email: body.email,
            },
            {
                $set: {
                    name: body.name,
                    phone: body.phone,
                    bio: body.bio,
                    image: body.image,
                    updatedAt: new Date(),
                },
            }
        );

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}