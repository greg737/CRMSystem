import { vi, describe } from "vitest";
import { getCustomerDetail } from "@/services/customer.service";

vi.mock('@/services/customer.service', () => ({
    getCustomerDetail: vi.fn()
}))

describe('Customer Details Component', () => {
    describe('Load state', () => {
        
    })
})