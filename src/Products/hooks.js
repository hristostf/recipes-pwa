import { useState, useEffect } from 'react';

const useProducts = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		if (navigator.onLine) {
			fetch('https://capacitor-recipes.herokuapp.com/api/v1/products')
				.then((response) => response.json())
				.then((data) => {
					setProducts(data);
					setLoading(false);
					localStorage.setItem('DATA', JSON.stringify(data));
				});
		} else {
			setProducts(JSON.parse(localStorage.getItem('DATA')));
			setLoading(false);
		}
	}, []);

	return { products, loading };
};

export default useProducts;
