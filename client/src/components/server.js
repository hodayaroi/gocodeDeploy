import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Admin= () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products') // Assuming your API endpoint for getting products is '/api/products'
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (productId) => {
    fetch(`/api/products/${productId}`, { method: 'DELETE' }) // Assuming your API endpoint for deleting a product is '/api/products/:productId'
      .then(response => response.json())
      .then(data => {
        // Remove the deleted product from the products state
        setProducts(products.filter(product => product._id !== productId));
      });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Link to="/">Go back to home page</Link>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Products table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell component="th" scope="row">{product.name}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" component={Link} to={`/admin/products/${product._id}`}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(product._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/admin/products/new">Add new product</Link> {/* Assuming the route for adding a new product is '/admin/products/new' */}
    </div>
  );
};

export default Admin;
