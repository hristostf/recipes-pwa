import { useState, useEffect } from 'react';

const useProducts = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch('https://capacitor-recipes.herokuapp.com/api/v1/products')
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
				localStorage.setItem('DATA', JSON.stringify(data));
			});
	}, []);

	return { products, loading };
};

export default useProducts;
