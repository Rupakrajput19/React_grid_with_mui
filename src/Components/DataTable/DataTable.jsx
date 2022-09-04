import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  s_no,
  name,
  emp_id,
  contact,
  place,
  position,
) {
  return { s_no, name, emp_id, contact, place,position };
}

const rows = [
  createData(1,'Ritu Kumar', 803159, 9876543210, 'Delhi', 'Software Developer'),
  createData(2,'Rupak Rajput', 238037, 9876543210, 'Delhi', 'Software Developer'),
  createData(3,'Rajat Kumar', 280362, 9876543210, 'Delhi', 'Software Developer'),
  createData(4,'Abhishek', 908035, 9876543210, 'Delhi', 'Software Developer'),
  createData(5,'Aniket kumar', 380356, 9876543210, 'Delhi', 'Software Developer'),
];

export default function DataTable() {
  return (
    <>
    <Typography variant='h2'sx={{textAlign:'center', textDecoration:'underline',fontWeight:'bold', margin:'30px 0'}}>Employee Details</Typography>
    <TableContainer component={Paper} sx={{margin:'30px 0 0 0'}}>
      <Table sx={{ minWidth:'300px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ border: '2px solid black' }}>S. NO.</TableCell>
            <TableCell align="center" sx={{ border: '2px solid black' }}>Employee Name</TableCell>
            <TableCell align="center" sx={{ border: '2px solid black' }}>Employee ID</TableCell>
            <TableCell align="center" sx={{ border: '2px solid black' }}>Contact Details</TableCell>
            <TableCell align="center" sx={{ border: '2px solid black' }}>Place</TableCell>
            <TableCell align="center" sx={{ border: '2px solid black' }}>Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center">{row.s_no}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.emp_id}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.place}</TableCell>
              <TableCell align="center">{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
