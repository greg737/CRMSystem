import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCustomerStore from '@/store/customer.store';
import { ChangeEvent, useState } from "react";
import { SaleOpportunityDto } from '@/client/customer.api';
import { createSaleOpportunity, updateSaleOpportunity } from '@/services/saleOpportunity.service';
import { useRouter } from 'next/navigation'  

export default function SaleOpportunity() {
    const saleOpportunities = useCustomerStore(store => store.customer.saleOpportunities);
    const [saleOpportunity, setSaleOpportunity] = useState<SaleOpportunityDto>();
    const [validated, setValidated] = useState(false);
    const router = useRouter();

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
            if (saleOpportunity.customerId) {
                const result = await updateSaleOpportunity(saleOpportunity);
                // TODO: Give feedback
                router.refresh();
            } else {
                const newId = await createSaleOpportunity(saleOpportunity);
                if (newId) {
                    router.push(`/customer/${newId}`);
                }
            }
        }

        setValidated(isValid);
        setSaleOpportunity(undefined);
    }

    function generateOnClickFn(index: number) {
        return () => setSaleOpportunity(saleOpportunities![index]);
    }

    return (
        <>
            <Row>
                <h2>Sale Opportunities</h2>
            </Row>
            <Row>
                <Form onSubmit={saveSaleOpportunity} validated={validated}>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
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
                            <Form.Control type="text"/>
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