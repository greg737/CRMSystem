"use client"
import CustomerDetail from "@/app/components/customerDetails";
import SaleOpportunity from "@/app/components/saleOpportunity";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function EditCustomer({ params }: { params: Promise<{ id: number }>}) {
    const [customerId, setCustomerId] = useState<number>();

    async function getCustomerId() {
        const customerId = (await params).id;
        if (customerId) {
            setCustomerId(customerId);
        }
    };
    
    useEffect(() => {
        getCustomerId();
    }, []);

    return (
        <Container>
            <Row>
                <h2>Customer Details</h2>
            </Row>
            <Row className="mb-5">
                <CustomerDetail customerId={customerId}/>
            </Row>
            <SaleOpportunity />
        </Container>
    );
}