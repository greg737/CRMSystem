"use client"

import { getCustomerDetail, createCustomer, updateCustomerDetail } from "@/services/customer.service";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCustomerStore from "@/store/customer.store";
import { CustomerDto, CustomerStatus } from "@/client/customer.api";
import { dateToInputString } from "@/helper/datetime-helper";

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

    function statusOnChange(e: ChangeEvent<HTMLSelectElement>) {
        setCustomer({
            ...customer,
            status: e.target?.value as CustomerStatus
        } as CustomerDto)
    }

    return (
        <Form onSubmit={saveCustomer} validated={validated}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label for="customer-name">Name</Form.Label>
                        <Form.Control id="customer-name" type="text" placeholder="Liam Lawson" value={customer?.name} onChange={generateOnChange('name' as CustomerDtoKey)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label for="customer-status">Status</Form.Label>
                        <Form.Select id="customer-status" value={customer?.status} required onChange={statusOnChange}>
                            <option>Select Status</option>
                            <option value="Active">Active</option>
                            <option value="NonActive">Non Active</option>
                            <option value="Lead">Lead</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label for="customer-created">Created</Form.Label>
                        <Form.Control id="customer-created" type="datetime-local" defaultValue={dateToInputString(customer?.created)} disabled/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label for="customer-email">Email</Form.Label>
                        <Form.Control id="customer-email" type="email" placeholder="name@example.com" value={customer?.email} onChange={generateOnChange('email' as CustomerDtoKey)}  required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label for="customer-phone">Mobile Phone</Form.Label>
                        <Form.Control id="customer-phone" type="tel" value={customer?.phone} onChange={generateOnChange('phone' as CustomerDtoKey)}  required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Button type="submit">{customer.id ? 'Save' : 'Create'}</Button>
            </Row>
        </Form>
    )
}