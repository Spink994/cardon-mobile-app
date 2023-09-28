import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import Slider from '../Slider';
import BlessingsCard from './BlessingsCard';
import { useAppSelector } from '../../../redux/app/hooks';

export default function TrendingBlessing() {
	const dashboardData = useAppSelector(state => state.dashboard);

	return (
		<View style={styles.trendingContainer}>
			{/* Text header */}
			<Text style={styles.textHeader}>Trending Blessings</Text>

			{/* Main content */}

			<FlatList
				horizontal
				data={dashboardData.trendingBlessings}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<Slider>
						<BlessingsCard blessing={item} />
					</Slider>
				)}
			/>
		</View>
	);
}
