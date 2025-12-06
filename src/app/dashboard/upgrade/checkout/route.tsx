import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECERT_KEY as string, {
  apiVersion: "2025-10-29.clover",
});

export async function POST(req: Request) {
  try {
    const { userId } = auth;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: "10,000 Ai Credit",
            description: "all 10$ worth of credit",
          },
          unit_amount: 1000,
        },
      },
    ];

    let purchase = await db.stripe_customer.create({
      data: {
        userId: userId,
        credit: 10000,
      },
    });

    let stripeCustomer = await db.stripe_customer.findUnique({
      where: {
        userId: userId,
      },
      select: {
        stripeCustomerId: true,
      },
    });

    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user?.emailAddresses[0].emailAddress,
      });

      let stripeCustomer = await db.stripeCustomer.create({
        data: {
          userId: userId,
          stripeCustomerId: customer.id,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomer?.stripeCustomerId,
      line_items,
      mode: "payment",
      metadata: {
        userId: userId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
