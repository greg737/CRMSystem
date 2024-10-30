export default function Dashboard() {
    const [customers, setCustomers] = useState([]);
    
    return (
        <>
            <h2>Customers</h2>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Created</td>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </>
    );
}