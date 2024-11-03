import { Client, CustomerDto, CustomerSummaryDto } from "@/client/customer.api";

const client = new Client(process.env.NEXT_PUBLIC_API_URL);

export async function getAllCustomers(): Promise<CustomerSummaryDto[]> {
    const response = await client.list();

    if (response) {
        return response;
    }

    return [];
}

export async function getCustomerDetail(id: number): Promise<CustomerDto | undefined> {
    const response = await client.customerGET(id);

    if (response) {
        return response;
    }

    return undefined;
}

export async function createCustomer(customer: CustomerDto): Promise<number> {
    const response = await client.customerPOST(customer);

    if (response) {
        return response;
    }

    return -1;
}

export async function updateCustomerDetail(customer: CustomerDto): Promise<boolean> {
    const response = await client.customerPUT(customer);
    return response;
}