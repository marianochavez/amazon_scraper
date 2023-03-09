import { adminDb } from "@/firebaseAdmin";

type Data = {
    collection_id: string;
    start_eta: number;
}

export async function POST(request: Request) {
    try {
        const { search } = await request.json();

        const response = await fetch("https://api.brightdata.com/dca/trigger?collector=c_lezrt3h72nrsdlmvm0&queue_next=1", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({search}),
        })

        const data = await response.json();

        const { collection_id, start_eta } = data as Data;

        await adminDb.collection("searches").doc(collection_id).set({
            search,
            start_eta,
            status: "pending",
            updatedAt: start_eta,
        })

        return new Response(JSON.stringify({ collection_id, start_eta }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.error("activateScraper ERROR:",error);
        return new Response(JSON.stringify(error), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}