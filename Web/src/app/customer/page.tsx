"use client"
import CustomerDetail from "@/app/components/customerDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function AddCustomer() {
    return (
        <Container>
            <Row>
                <h2>Add New Customer</h2>
            </Row>
            <CustomerDetail />
        </Container>
    );
}