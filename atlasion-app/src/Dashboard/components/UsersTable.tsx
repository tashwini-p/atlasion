import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

const url = 'https://atlasion.onrender.com/users';

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  age: number;
  username: string;
}

const UsersTable: React.FC = () => {
  const [rows, setRows] = useState<UserData[]>([]);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [editRow, setEditRow] = useState<UserData | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: UserData[]) =>
        setRows(
          data.map((user) => ({
            ...user,
            fullName: `${user.firstName} ${user.lastName}`,
          }))
        )
      )
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    // Remove the row from the UI
    setRows((prevRows) => prevRows.filter((row) => row.id !== deleteId));

    // Send a request to delete the user from the backend
    fetch(`${url}/${deleteId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000); // Hide the success message after 3 seconds
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });

    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEdit = (row: UserData) => {
    setEditRow(row);
  };

  const handleEditConfirm = () => {
    // Send a request to update the user data in the backend
    fetch(`${url}/${editRow!.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editRow),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update user');
        }
        // Update the row in the UI
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === editRow!.id ? editRow! : row))
        );
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000); // Hide the success message after 3 seconds
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });

    setEditRow(null);
  };

  const handleEditCancel = () => {
    setEditRow(null);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'fullName', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'username', headerName: 'Username', width: 160 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <div style={{ display: 'flex' }}>
          <EditIcon
            style={{ cursor: 'pointer', marginRight: '8px' }}
            onClick={() => handleEdit(params.row as UserData)}
          />
          <DeleteIcon
            style={{ cursor: 'pointer', color: 'crimson' }}
            onClick={() => handleDelete((params.row as UserData).id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginLeft: '20px', marginTop: '70px', height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        //@ts-ignore
        pageSize={9}
        pageSizeOptions={[5, 9, 10, 100]}
        isRowSelectable={() => false}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            width: '400px',
          }}
        >
          <h2 id="modal-title">Confirm Delete</h2>
          <p id="modal-description">Are you sure you want to delete this item?</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              style={{
                marginRight: '10px',
                padding: '10px 20px',
                backgroundColor: '#ff5757',
                color: 'white',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleConfirmDelete}
            >
              Yes
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: 'white',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleCloseModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      {showSuccessMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          User deleted successfully!
        </div>
      )}
      {editRow && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            width: '400px',
          }}
        >
          <h2>Edit User</h2>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="edit-firstName">First Name:</label>
            <input
              id="edit-firstName"
              type="text"
              value={editRow.firstName}
              onChange={(e) => setEditRow({ ...editRow, firstName: e.target.value })}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="edit-lastName">Last Name:</label>
            <input
              id="edit-lastName"
              type="text"
              value={editRow.lastName}
              onChange={(e) => setEditRow({ ...editRow, lastName: e.target.value })}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="edit-email">Email:</label>
            <input
              id="edit-email"
              type="email"
              value={editRow.email}
              onChange={(e) => setEditRow({ ...editRow, email: e.target.value })}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="edit-age">Age:</label>
            <input
              id="edit-age"
              type="number"
              value={editRow.age}
              onChange={(e) => setEditRow({ ...editRow, age: parseInt(e.target.value) || 0 })}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              style={{
                marginRight: '10px',
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: 'white',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleEditConfirm}
            >
              Save
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff5757',
                color: 'white',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
