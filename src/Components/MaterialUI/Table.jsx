/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableData({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Who Create</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Perticipation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((res,idx) => (
            <TableRow
              key={res._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{idx+1}</TableCell>
              <TableCell align="left">{res.name}</TableCell>
              <TableCell align="left">{res.email}</TableCell>
              <TableCell align="left">{res.prizemoney}</TableCell>
              <TableCell align="left">{res.participator}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
