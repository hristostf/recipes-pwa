import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import ActivityIndicator from '../../ActivityIndicator/ActivityIndicator';
import './ProductsList.css';

const Products = ({ loading, products }) => {
	return (
		<div className='main'>
			{loading && <ActivityIndicator />}
			{!loading &&
				products.length > 0 &&
				products.map((product) => {
					return <ProductItem {...product} />;
				})}
		</div>
	);
};

Products.propTypes = {
	loading: PropTypes.bool,
	products: PropTypes.arrayOf(PropTypes.any),
};

Products.defaultProps = {
	loading: true,
	products: [],
};

export default Products;
