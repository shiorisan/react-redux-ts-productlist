import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { Image as ImageIcon } from '@material-ui/icons';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <List>
    {products.map((product) => (
      <ListItem key={product.id}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={product.name} secondary={product.price} />
      </ListItem>
    ))}
  </List>
);

export default ProductList;