import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Slider from '../../components/home/Slider';
import { useAppSelector } from '../../redux/app/hooks';
import Icons from 'react-native-vector-icons/FontAwesome6';
import BalanceCard from '../../components/home/BalanceCard';
import PromisesFrom from '../../components/home/PromisesFrom';
import PromisesTo from '../../components/home/PromisesTo';
import TrendingBlessing from '../../components/home/TrendingBlessings';
import RecentBlessing from '../../components/home/RecentBlessings';

export default function Home() {
	const dashboardData = useAppSelector(state => state.dashboard);

	return (
		<SafeAreaView>
			<ScrollView style={styles.mainContainer}>
				{/* Overview container */}
				<Slider>
					<BalanceCard />
					<PromisesFrom />
					<PromisesTo />
				</Slider>

				{/* Wetin you want? */}
				<View style={{ ...styles.auxillary, ...styles.auxillary2 }}>
					<TouchableOpacity
						activeOpacity={0.9}
						style={styles.wetinYouWant}
					>
						<Text style={styles.wetinYouWant.text}>
							Wetin you want?
						</Text>
					</TouchableOpacity>
				</View>

				{/* Trending Blessings */}
				<TrendingBlessing />

				{/* Recent Blessing */}
				<RecentBlessing />
			</ScrollView>
		</SafeAreaView>
	);
}
