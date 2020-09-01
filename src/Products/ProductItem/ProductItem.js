import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';

const ProductItem = ({ name, price, description, image }) => {
	return (
		<div className='card'>
			<img src={image} alt='Avatar' />
			<div className='container'>
				<h4>
					<b>{`${name} $${price}`}</b>
				</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	image: PropTypes.string,
};

ProductItem.defaultProps = {
	name: '',
	price: 0,
	description: '',
	image: '',
};

export default ProductItem;
