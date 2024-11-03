import { Client, SaleOpportunityDto } from "@/client/customer.api";

const client = new Client(process.env.NEXT_PUBLIC_API_URL);

export async function createSaleOpportunity(sale: SaleOpportunityDto): Promise<number> {
    const response = await client.saleOpportunityPOST(sale);

    if (response) {
        return response;
    }

    return -1;
}

export async function updateSaleOpportunity(sale: SaleOpportunityDto): Promise<boolean> {
    const response = await client.saleOpportunityPUT(sale);
    return response;
}