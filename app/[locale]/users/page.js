"use client";
import './users.scss';
import { useEffect, useState } from 'react';
import Link from "next-intl/link";
import Axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { url } from '@/app/components/constants/Constants';
import { useRouter } from 'next/navigation';

function Users() {
    const [list, setList] = useState([])
    const router = useRouter();
    const token = localStorage.getItem("token");
    !token ? router.push('/login') : '';
      useEffect(() => {

          if (token) {
            Axios.get(`${url}/api/get`, {
                headers: {
                'x-access-token': token,
              },
            })
            .then((response) => {
              setList(response.data);
            })
            .catch((error) => {
              console.error('Wystąpił błąd podczas pobierania danych:', error.message);
            });
          }
        }, []);
    const logOut = () => {
        localStorage.removeItem("token");
        router.push('/');
    };
    return (
       <div className="data-table">
           <button className="data-table-btn-logout" onClick={logOut}>Wyloguj</button>
           <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">IMIĘ</TableCell>
                    <TableCell align="right">E-MAIL</TableCell>
                    <TableCell align="right">WIADOMOŚĆ</TableCell>
                    <TableCell align="right">DATA WYSŁANIA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.map((val) => (
                    <TableRow
                      key={val.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {val.id}
                      </TableCell>
                      <TableCell align="right">{ val.name }</TableCell>
                      <TableCell align="right">{ val.email }</TableCell>
                      <TableCell align="right">{ val.message }</TableCell>
                      <TableCell align="right">{ new Date(val.created_at).toLocaleDateString() }</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
       </div>
    );
}

export default Users;