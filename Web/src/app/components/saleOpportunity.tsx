import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCustomerStore from '@/store/customer.store';
import { ChangeEvent, useState } from "react";
import { SaleOpportunityDto, SaleStatus } from '@/client/customer.api';
import { createSaleOpportunity, updateSaleOpportunity } from '@/services/saleOpportunity.service';

export default function SaleOpportunity() {
    const saleOpportunities = useCustomerStore(store => store.customer.saleOpportunities);
    const customerId = useCustomerStore(store => store.customer.id);
    const [saleOpportunity, setSaleOpportunity] = useState<SaleOpportunityDto>();
    const [validated, setValidated] = useState(false);

    const rows = saleOpportunities ? saleOpportunities.map((s, index) => {
        return (
          <tr key={s.id}>
            <td>{s.status}</td>
            <td>{s.name}</td>
            <td>
                <Button onClick={generateOnClickFn(index)}>Edit</Button>
            </td>
          </tr>
        );
      }) : <></>;

    async function saveSaleOpportunity(event: ChangeEvent<HTMLFormElement>) {
        const isValid = event.currentTarget.checkValidity();
        event.preventDefault();
        event.stopPropagation();

        if (isValid && saleOpportunity) {
            if (saleOpportunity.id) {
                const result = await updateSaleOpportunity(saleOpportunity); 
            } else {
                const newId = await createSaleOpportunity({
                    ...saleOpportunity,
                    customerId: customerId
                } as SaleOpportunityDto);
            }
            location.reload();
        }
        
        setValidated(isValid);
    }

    function generateOnClickFn(index: number) {
        return () => setSaleOpportunity(saleOpportunities![index]);
    }

    function statusOnChange(e: ChangeEvent<HTMLSelectElement>) {
        setSaleOpportunity({
            ...saleOpportunity,
            status: e.target?.value as SaleStatus
        } as SaleOpportunityDto);
    }

    function nameOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSaleOpportunity({
            ...saleOpportunity,
            name: e.target?.value
        } as SaleOpportunityDto);
    }

    return (
        <>
            <Row>
                <h2>Sale Opportunities</h2>
            </Row>
            <Row className='mb-5'>
                <Form onSubmit={saveSaleOpportunity} validated={validated}>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select value={saleOpportunity?.status} onChange={statusOnChange}>
                                <option>Select Status</option>
                                <option value="New">New</option>
                                <option value="ClosedWon">Closed Won</option>
                                <option value="ClosedLost">Closed Lost</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"  value={saleOpportunity?.name} onChange={nameOnChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button type="submit">Save</Button>
                    </Col>
                </Form>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Row>
        </>
    );
}