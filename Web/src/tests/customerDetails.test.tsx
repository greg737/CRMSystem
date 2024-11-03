import { vi, describe, expect, test } from "vitest";
import { getCustomerDetail } from "@/services/customer.service";
import { CustomerDto, CustomerStatus } from "@/client/customer.api";
import { act, render, screen } from '@testing-library/react';
import CustomerDetail from '@/app/components/customerDetails';

vi.mock('@/services/customer.service', () => ({
    getCustomerDetail: vi.fn()
}))

vi.mock('next/navigation', () => ({
    useRouter: () => vi.fn()
}))

describe('Customer Details Component', () => {
    test('should not fetch customer detail if no customer id', async () => {
        await act(async () => {
            render(<CustomerDetail />);
        })
        expect(getCustomerDetail).not.toHaveBeenCalled();
    })

    test('should trigger get customer detail API if has customer id', async () => {
        await act(async () => {
            render(<CustomerDetail customerId={1}/>);
        })
        expect(getCustomerDetail).toHaveBeenCalledOnce();
    })

    test('should load customer name if has customer id', async () => {
        const testString = 'Test';
        vi.mocked(getCustomerDetail).mockResolvedValue(new CustomerDto({
            status: undefined,
            name: testString,
            email: '',
            phone: '',
            saleOpportunities: []
        }));

        await act(async () => {
            render(<CustomerDetail customerId={1}/>);
        })
        
        const input = screen.getByLabelText('Name')
        expect(input).toHaveValue(testString);
    })

    test('should load customer email if has customer id', async () => {
        const testString = 'test@test.com';
        vi.mocked(getCustomerDetail).mockResolvedValue(new CustomerDto({
            status: undefined,
            name: '',
            email: testString,
            phone: '',
            saleOpportunities: []
        }));

        await act(async () => {
            render(<CustomerDetail customerId={1}/>);
        })
        
        const input = screen.getByLabelText('Email')
        expect(input).toHaveValue(testString);
    })

    test('should load customer phone if has customer id', async () => {
        const testString = '021212121';
        vi.mocked(getCustomerDetail).mockResolvedValue(new CustomerDto({
            status: undefined,
            name: '',
            email: '',
            phone: testString,
            saleOpportunities: []
        }));

        await act(async () => {
            render(<CustomerDetail customerId={1}/>);
        })
        
        const input = screen.getByLabelText('Mobile Phone')
        expect(input).toHaveValue(testString);
    })

    test('should load customer status if has customer id', async () => {
        const testString = 'NonActive' as CustomerStatus;
        vi.mocked(getCustomerDetail).mockResolvedValue(new CustomerDto({
            status: testString,
            name: '',
            email: '',
            phone: testString,
            saleOpportunities: []
        }));

        await act(async () => {
            render(<CustomerDetail customerId={1}/>);
        })
        
        const input = screen.getByLabelText('Status')
        expect(input).toHaveValue(testString);
    })
})