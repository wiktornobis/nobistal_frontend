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
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'

function Users() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [updateUser, setUpdateUser] = useState(false);
  const [updateUserFail, setUpdateUserFail] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Klient dodany ręcznie.',
  });
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const token = localStorage.getItem('token');
  !token ? redirect('/login') : '';
  useEffect(() => {
    let timeout;
    if (updateUser) {
      timeout = setTimeout(() => {
        setUpdateUser(false);
      }, 6000);
    }
    return () => clearTimeout(timeout);
  }, [updateUser]);
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
    router.push('/');
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
  function handleEditFormChange(event) {
    const { name, value } = event.target;
    setEditFormData((prevEditFormData) => ({
      ...prevEditFormData,
      [name]: value,
    }));
  }
  function handleCancelEdit() {
    setEditUserId(null);
    setEditFormData({
      name: '',
      email: '',
      message: '',
    });
  }
  function handleEditUser(user) {
    setEditUserId(user.id);
    setEditFormData({
      name: user.name,
      email: user.email,
      message: user.message,
    });
  }

   function handleUpdateUser(e) {
    e.preventDefault();
    Axios.put(`${url}/api/update/user/${editUserId}`, editFormData, {
      headers: {
        'x-access-token': token,
      },
    })
      .then((response) => {
        setList((prevList) =>
          prevList.map((user) => (user.id === editUserId ? { ...user, ...editFormData } : user))
        );
        setEditUserId(null);
        setUpdateUser(true);
        setEditFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Wystąpił błąd podczas aktualizacji użytkownika:', error.message);
        setUpdateUserFail(true);
      });
  }
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
      <h3>Baza klientów - NOBI-STAL</h3>
      <button className="data-table-btn-logout" onClick={logOut}>Wyloguj</button>
      {!editUserId && (
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
      )}
      {editUserId && (
        <form onSubmit={handleUpdateUser}>
          <label>
            Imię:
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleEditFormChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editFormData.email}
              onChange={handleEditFormChange}
              required
            />
          </label>
          <label>
            Wiadomość:
            <textarea
              name="message"
              value={editFormData.message}
              onChange={handleEditFormChange}
              required
            />
          </label>
          <div className="btn-actions">
            <button onClick={handleCancelEdit}>Anuluj</button>
            <button type="submit">Zapisz zmiany</button>
          </div>
        </form>
      )}
      {updateUser && <p className="update_data">Dane użytkownika zostały zaktualizowane pomyślnie.</p>}
      {updateUserFail && <p className="update_data_fail">Wystąpił błąd podczas zapisu danych.</p>}
      <div className="search">
        <label>
          Wyszukaj użytkownika:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
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
            {list
                .filter((user) =>
                  user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  new Date(user.created_at).toLocaleDateString().toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((val) => (
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
                    <TableCell align="right">
                      <button onClick={() => handleEditUser(val)}>Edytuj</button>
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
