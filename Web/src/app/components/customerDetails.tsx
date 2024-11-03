"use client"

import { getCustomerDetail, createCustomer, updateCustomerDetail } from "@/services/customer.service";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCustomerStore from "@/store/customer.store";
import { CustomerDto } from "@/client/customer.api";

interface CustomerDetailProps {
    customerId?: number
}

export default function CustomerDetail(props: CustomerDetailProps) {
    const customer = useCustomerStore(store => store.customer);
    const setCustomer = useCustomerStore(store => store.setCustomer);

    const [validated, setValidated] = useState(false);
    const router = useRouter();

    async function fetchCustomerDetail() {
        if (props.customerId) {
            const customer = await getCustomerDetail(props.customerId);
            if (customer) {
                setCustomer(customer);
            }
        }
    };

    async function saveCustomer(event: ChangeEvent<HTMLFormElement>) {
        const isValid = event.currentTarget.checkValidity();
        event.preventDefault();
        event.stopPropagation();

        if (isValid) {
            if (props.customerId) {
                const result = await updateCustomerDetail(customer);
                // TODO: Give feedback
                router.refresh();
            } else {
                const newCustomer = {
                    ...customer,
                    created: new Date()
                } as CustomerDto;

                const newId = await createCustomer(newCustomer);
                if (newId) {
                    router.push(`/customer/${newId}`);
                }
            }
        }

        setValidated(isValid);
    }
    
    useEffect(() => {
        fetchCustomerDetail();
    }, [props.customerId]);

    function dateToInputString(dateTime: Date | undefined) {
        if (!dateTime) {
            return '';
        }

        dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
        return dateTime.toISOString().slice(0,16);
    };

    type CustomerDtoKey = keyof typeof CustomerDto;
    function generateOnChange(fieldName: CustomerDtoKey) {
        return (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = {
                ...customer,
                [fieldName]: e.target?.value
            } as CustomerDto;
            setCustomer(newValue)
        }
    }

    return (
        <Form onSubmit={saveCustomer} validated={validated}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Liam Lawson" value={customer?.name} onChange={generateOnChange('name' as CustomerDtoKey)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Created</Form.Label>
                        <Form.Control type="datetime-local" defaultValue={dateToInputString(customer?.created)} disabled/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={customer?.email} onChange={generateOnChange('email' as CustomerDtoKey)}  required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Form.Control type="tel" value={customer?.phone} onChange={generateOnChange('phone' as CustomerDtoKey)}  required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Button type="submit">{customer.id ? 'Save' : 'Create'}</Button>
            </Row>
        </Form>
    )
}