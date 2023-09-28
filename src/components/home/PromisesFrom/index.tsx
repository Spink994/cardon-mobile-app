import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import Icons from 'react-native-vector-icons/FontAwesome6';
import { useAppSelector } from '../../../redux/app/hooks';

export default function PromisesFrom() {
	const dashboardData = useAppSelector(state => state.dashboard);

	return (
		<View style={styles.slide}>
			<View style={styles.slideFirstChild}>
				<Text style={styles.slideFirstChild.textLabel}>
					{dashboardData.overviewData?.promisesFrom.label}
				</Text>
				<Icons name="users-line" color="white" size={80} />
			</View>
			<View style={styles.slideSecondChild}>
				{/* Received Promises */}
				<View style={styles.slideSecondChild.boxContainer}>
					<Text style={styles.slideSecondChild.label}>
						{
							dashboardData.overviewData?.promisesFrom.children[0]
								.label
						}
					</Text>
					<Text
						style={{
							...styles.slideSecondChild.label,
							fontSize: 24,
							fontFamily: 'Poppins-Bold',
						}}
					>
						{
							dashboardData.overviewData?.promisesFrom.children[0]
								.value
						}
					</Text>
				</View>

				{/* Blessings */}
				<View style={styles.slideSecondChild.boxContainer}>
					<Text style={styles.slideSecondChild.label}>
						{
							dashboardData.overviewData?.promisesFrom.children[1]
								.label
						}
					</Text>
					<Text
						style={{
							...styles.slideSecondChild.label,
							fontSize: 24,
							fontFamily: 'Poppins-Bold',
						}}
					>
						{
							dashboardData.overviewData?.promisesFrom.children[1]
								.value
						}
					</Text>
				</View>
			</View>
		</View>
	);
}
