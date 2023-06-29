import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';

import axios from 'axios';

import { styles } from './styles';

export default function Home(props) {
	const { navigation } = props;
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/categories.php')
			.then(response => {
				const data = response.data;
				if (data.categories) {
					setCategories(data.categories);
				}
			})
			.catch(error => {
				console.error('Error fetching categories:', error);
			});
	}, []);

	const renderCategoryItem = (category) => {
		return (
			<TouchableOpacity
				key={category.idCategory}
				onPress={() => navigation.navigate('ReceitasCategoria', { category })}
				style={styles.categoryContainer}
			>
				<Image
					source={{ uri: category.strCategoryThumb }}
					style={styles.categoryImage}
				/>
				<Text style={styles.categoryName}>{category.strCategory}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

			<Header />

			<Text style={styles.pageTitle}>O que você deseja cozinhar hoje?</Text>
			<View style={styles.gridContainer}>
				{categories.map(category => renderCategoryItem(category))}
			</View>
		</ScrollView>
	);
}