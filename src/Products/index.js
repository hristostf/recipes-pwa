import React from 'react';
import useProducts from './hooks';
import Products from './ProductsList/ProductsList';

const ProductsController = () => {
	const productsData = useProducts();
	return <Products {...productsData} />;
};

export default ProductsController;
