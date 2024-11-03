"use client"
import { CustomerSummaryDto } from "@/client/customer.api";
import { getAllCustomers } from "@/services/customer.service";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function Home() {
  const [customers, setCustomers] = useState<CustomerSummaryDto[]>([]);

  async function fetchCustomers() {
    const customers = await getAllCustomers();

    if (customers && customers.length > 0) {
      setCustomers(customers);
    }
  }
  
  useEffect(() => {
    fetchCustomers();
  }, [])

  const rows = customers.map((c) => {
    return (
      <tr key={c.id}>
        <td>{c.name}</td>
        <td>{c.status}</td>
        <td>{c.created?.toLocaleString()}</td>
        <td><Link href={`customer/${c.id}`}>View</Link></td>
      </tr>
    );
  });

  return (
    <Container>
      <Row>
        <h2>Customers</h2>
      </Row>
      <Row>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
      </Row>
    </Container>
  );
}
