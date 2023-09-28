import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '../Slider';
import { useAppSelector } from '../../../redux/app/hooks';
import RecentBlessingCard from './RecentBlessingCard';

export default function RecentBlessing() {
	const dashboardData = useAppSelector(state => state.dashboard);

	return (
		<View style={styles.recentContainer}>
			{/* header */}
			<View style={styles.header}>
				<Text style={styles.textHeader}>Recent Blessings</Text>
				<TouchableOpacity activeOpacity={0.9}>
					<Text style={styles.viewAll}>View all</Text>
				</TouchableOpacity>
			</View>

			{/* Main content */}
			{dashboardData.recentBlessings.map((blessing, index) => (
				<Slider key={blessing.id}>
					<RecentBlessingCard
						recentBlessing={{ ...blessing, index }}
					/>
				</Slider>
			))}

			{/* Padding on the bottom - */}
			<View style={{ height: 50 }} />
		</View>
	);
}
