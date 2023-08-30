
import  { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import "../../css/CustomerList.css";

const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      mobile: '123-456-7890',
      panCard: 'ABCDE1234F',
      address: '123 Main St, City, Country',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      mobile: '987-654-3210',
      panCard: 'FGHIJ5678K',
      address: '456 Elm St, City, Country',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      mobile: '555-555-5555',
      panCard: 'LMNOP1234Q',
      address: '789 Oak St, City, Country',
    },
    {
      id: 4,
      name: 'Bob Williams',
      email: 'bob@example.com',
      mobile: '111-222-3333',
      panCard: 'RSTUV5678W',
      address: '999 Maple St, City, Country',
    },
    {
      id: 5,
      name: 'Ella Martinez',
      email: 'ella@example.com',
      mobile: '777-888-9999',
      panCard: 'XYZAB6789C',
      address: '111 Pine St, City, Country',
    },
    {
      id: 6,
      name: 'Frank Adams',
      email: 'frank@example.com',
      mobile: '333-444-5555',
      panCard: 'PQRST6789U',
      address: '222 Cedar St, City, Country',
    },
    {
      id: 7,
      name: 'Grace Wilson',
      email: 'grace@example.com',
      mobile: '666-777-8888',
      panCard: 'DEFGH1234I',
      address: '333 Birch St, City, Country',
    },
    {
      id: 8,
      name: 'Henry Lee',
      email: 'henry@example.com',
      mobile: '222-333-4444',
      panCard: 'JKLMN5678O',
      address: '444 Walnut St, City, Country',
    },
    {
      id: 9,
      name: 'Isabella Turner',
      email: 'isabella@example.com',
      mobile: '444-555-6666',
      panCard: 'UVWXY6789Z',
      address: '555 Oak St, City, Country',
    },
    {
      id: 10,
      name: 'Jack Harris',
      email: 'jack@example.com',
      mobile: '888-999-0000',
      panCard: 'ABCD1234E',
      address: '666 Elm St, City, Country',
    },
    {
      id: 11,
      name: 'Kate Davis',
      email: 'kate@example.com',
      mobile: '555-666-7777',
      panCard: 'FGHIJ5678K',
      address: '777 Maple St, City, Country',
    },
    {
      id: 12,
      name: 'Liam Turner',
      email: 'liam@example.com',
      mobile: '111-222-3333',
      panCard: 'LMNOP1234Q',
      address: '888 Oak St, City, Country',
    },
    {
      id: 13,
      name: 'Mia Allen',
      email: 'mia@example.com',
      mobile: '777-888-9999',
      panCard: 'RSTUV5678W',
      address: '999 Elm St, City, Country',
    },
    {
      id: 14,
      name: 'Noah Evans',
      email: 'noah@example.com',
      mobile: '444-555-6666',
      panCard: 'XYZAB6789C',
      address: '111 Birch St, City, Country',
    },
    {
      id: 15,
      name: 'Olivia Lewis',
      email: 'olivia@example.com',
      mobile: '888-999-0000',
      panCard: 'DEFGH1234I',
      address: '222 Cedar St, City, Country',
    },
    {
      id: 16,
      name: 'Peter Scott',
      email: 'peter@example.com',
      mobile: '555-666-7777',
      panCard: 'JKLMN5678O',
      address: '333 Walnut St, City, Country',
    },
    {
      id: 17,
      name: 'Quinn Phillips',
      email: 'quinn@example.com',
      mobile: '111-222-3333',
      panCard: 'UVWXY6789Z',
      address: '444 Oak St, City, Country',
    },
    {
      id: 18,
      name: 'Ryan Mitchell',
      email: 'ryan@example.com',
      mobile: '777-888-9999',
      panCard: 'ABCD1234E',
      address: '555 Elm St, City, Country',
    },
    {
      id: 19,
      name: 'Sophia Turner',
      email: 'sophia@example.com',
      mobile: '444-555-6666',
      panCard: 'FGHIJ5678K',
      address: '666 Maple St, City, Country',
    },
    {
      id: 20,
      name: 'Thomas Walker',
      email: 'thomas@example.com',
      mobile: '888-999-0000',
      panCard: 'LMNOP1234Q',
      address: '777 Oak St, City, Country',
    },
  ];
  
  

  const ITEMS_PER_PAGE = 10;

  const CustomerList = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleChangePage = (event, newPage) => {
      setCurrentPage(newPage);
    };
  
    const displayedCustomers = customers.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
  
    return (
      <div className="customer-list-container">
        <h2>Customer List</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>PAN Card</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.mobile}</TableCell>
                  <TableCell>{customer.panCard}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ITEMS_PER_PAGE]}
          component="div"
          count={customers.length}
          rowsPerPage={ITEMS_PER_PAGE}
          page={currentPage}
          onPageChange={handleChangePage}
        />
      </div>
    );
  };
  
  export default CustomerList;