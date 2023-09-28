import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

interface RecentBlessingType {
	recentBlessing: {
		index: number;
		id: number;
		image: string;
		title: string;
		message: string;
		status: 'fulfilled' | 'pending';
		time: string;
	};
}

const Images = [
	<Image source={require('../../../../assets/images/davido.png')} />,
	<Image source={require('../../../../assets/images/havy.png')} />,
	<Image source={require('../../../../assets/images/mufasa.png')} />,
	<Image source={require('../../../../assets/images/iniedo.png')} />,
];

export default function RecentBlessingCard({
	recentBlessing,
}: RecentBlessingType) {
	return (
		<View style={styles.recentBlessingCard}>
			{/* Profile Image */}
			{Images[recentBlessing.index]}

			{/* Blessing Information */}
			<View style={styles.rightSideOfCard}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>
						{recentBlessing?.title || 'Blessings don drop!'}
					</Text>
					<Text
						style={
							recentBlessing.status === 'fulfilled'
								? styles.fulfilled
								: styles.pending
						}
					>
						{recentBlessing?.status}
					</Text>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.message}>
						{recentBlessing?.message ||
							'@havy promised you N10,000'}
					</Text>
					<Text style={styles.time}>
						{recentBlessing?.time || '2mins ago'}
					</Text>
				</View>
			</View>
		</View>
	);
}
