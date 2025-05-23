import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsForURL = absoluteUrl("/settings");

export async function GET(){
    try {
        const {userId} = auth();
        const user = await currentUser();
        if(!userId || !user){
            return new NextResponse("Unauthorized", {status: 401});
        }
        const userSubscription = await prismadb.userSubscription.findUnique({
            where:{
                userId
            }
        });

        if(userSubscription && userSubscription.stripeCustomerId){
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsForURL
            });
        return new NextResponse(JSON.stringify({url: stripeSession.url}));
        }
        const stripeSession = await stripe.checkout.sessions.create({
        success_url:settingsForURL,
        cancel_url:settingsForURL,
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "auto",
        customer_email: user.emailAddresses[0].emailAddress,
        line_items:[{
            price_data:{
                currency: "usd",
                product_data:{
                    name: "PRO Subscription",
                    description: "Unlimited access to PRO features"
                },
                unit_amount:2000,
                recurring:{
                    interval:"month"
                }
            },
            quantity:1
        }], metadata:{
            userId,
        }
        });

        return new NextResponse(JSON.stringify({url: stripeSession.url}));
    } catch (error) {
        console.log("[STRIPE_ERROR]",error);
        return new NextResponse("Internal error", {status: 500});
    }
}