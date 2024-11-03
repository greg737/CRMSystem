import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useCustomerStore from '@/store/customer.store';
import { useState } from "react";
import { SaleOpportunityDto } from '@/client/customer.api';

export default function SaleOpportunity() {
    const saleOpportunities = useCustomerStore(store => store.customer.saleOpportunities);
    const [saleOpportunity, setSaleOpportunity] = useState<SaleOpportunityDto>();

    const rows = saleOpportunities ? saleOpportunities.map((s) => {
        return (
          <tr key={s.id}>
            <td>{s.status}</td>
            <td>{s.name}</td>
            <td></td>
          </tr>
        );
      }) : <></>;

    return (
        <>
            <Row>
                <h2>Sale Opportunities</h2>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Status</option>
                            <option value="1">New</option>
                            <option value="ClosedWon">ClosedWon</option>
                            <option value="ClosedLost">ClosedLost</option>
                        </Form.Select>
                        <Form.Control type="text" placeholder="Liam Lawson" value={saleOpportunity?.name} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="datetime-local" disabled/>
                    </Form.Group>
                </Col>
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