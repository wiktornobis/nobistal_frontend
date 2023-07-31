"use client"
import { useEffect, useState } from 'react';
import Axios from 'axios';
import './users.scss';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { url } from '@/app/components/constants/Constants';

function Users() {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Klient dodany ręcznie.',
  });

  // const router = useRouter();
  const token = localStorage.getItem('token');
  // !token ? router.push('/login') : '';

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
    localStorage.removeItem('token');
    // router.push('/');
  };
  const handleDeleteUser = (userId) => {
    const confirmed = window.confirm('Czy na pewno chcesz usunąć użytkownika z bazy danych?');
    if (confirmed) {
      Axios.delete(`${url}/api/delete/user/${userId}`, {
        headers: {
          'x-access-token': token,
        },
      })
        .then((response) => {
          setList((prevList) => prevList.filter((user) => user.id !== userId));
        })
        .catch((error) => {
          console.error('Wystąpił błąd podczas usuwania użytkownika:', error.message);
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${url}/api/new/user`, formData, {
      headers: {
        'x-access-token': token,
      },
    })
      .then((response) => {
        setFormData({
            name: '',
            email: '',
            message: 'Klient dodany ręcznie.',
        });
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
      })
      .catch((error) => {
        console.error('Wystąpił błąd podczas dodawania użytkownika:', error.message);
      });
  };

  return (
    <div className="data-table">
      <button className="data-table-btn-logout" onClick={logOut}>Wyloguj</button>
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Wiadomość:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Dodaj</button>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">IMIĘ</TableCell>
              <TableCell align="right">E-MAIL</TableCell>
              <TableCell align="right">WIADOMOŚĆ</TableCell>
              <TableCell align="right">DATA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((val) => (
              <TableRow key={val.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {val.id}
                </TableCell>
                <TableCell align="right">{val.name}</TableCell>
                <TableCell align="right">{val.email}</TableCell>
                <TableCell align="right">{val.message}</TableCell>
                <TableCell align="right">{new Date(val.created_at).toLocaleDateString()}</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleDeleteUser(val.id)}>Usuń</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
