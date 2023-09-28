import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { useAppSelector } from '../../../redux/app/hooks';
import Icons from 'react-native-vector-icons/FontAwesome6';

export default function BalanceCard() {
	const dashboardData = useAppSelector(state => state.dashboard);

	return (
		<View style={styles.slide}>
			{/* Card Label */}
			<Text style={styles.textLabel}>
				{dashboardData.overviewData?.wallet.label}
			</Text>

			{/* Card balance and toggler */}
			<View style={styles.cardBalanceContainer}>
				<Text style={styles.textBalance}>
					N
					{dashboardData.overviewData?.wallet.balance.toLocaleString()}
				</Text>

				{/* Toggler */}
				<TouchableOpacity style={styles.balanceToggler}>
					<Icons name="eye-slash" color="white" size={20} />
				</TouchableOpacity>
			</View>

			{/* Withdraw Balance button */}
			<TouchableOpacity
				activeOpacity={0.9}
				style={styles.withdrawBalance}
			>
				<Text style={styles.withdrawBalance.withdrawBalanceText}>
					Withdraw Balance
				</Text>
			</TouchableOpacity>
		</View>
	);
}
