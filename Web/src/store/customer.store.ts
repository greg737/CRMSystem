import { CustomerDto } from '@/client/customer.api'
import { create } from 'zustand'

interface CustomerState {
    customer: CustomerDto
}

interface CustomerAction {
    setCustomer: (customer: CustomerDto) => void
}

const initialCustomer = new CustomerDto({
    status: undefined,
    name: '',
    email: '',
    phone: '',
    saleOpportunities: []
})

const useCustomerStore = create<CustomerState & CustomerAction>((set) => ({
    customer: initialCustomer,
    setCustomer: (customer: CustomerDto) => set((state) => ({ customer }))
}));

export default useCustomerStore;