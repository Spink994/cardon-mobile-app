import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

interface BlessingType {
	blessing: {
		id: number;
		handle: string;
		followersCount: number;
		petName: string;
		title: string;
		amountReceived: number;
		promisesReceived: number;
	};
}

export default function BlessingsCard({ blessing }: BlessingType) {
	return (
		<View style={styles.mainContentContainer}>
			{/* Left container */}
			<View style={styles.leftContentContainer}>
				<Image
					source={require('../../../../assets/images/profile.png')}
				/>
				{/* handle */}
				<Text style={styles.handle}>
					{blessing?.handle || '@Chuks'}
				</Text>

				{/* Followers */}
				<Text style={styles.otherText}>
					{blessing?.followersCount || 5}M Followers
				</Text>

				{/* PetName */}
				<View style={styles.petNameContainer}>
					<Text style={styles.otherText}>
						{blessing?.petName || 'Champion'}
					</Text>
					<Image
						source={require('../../../../assets/images/star.png')}
					/>
				</View>
			</View>

			{/* Right container */}
			<View style={styles.rightContentContainer}>
				<Text style={styles.rightContentTextBold}>
					{blessing?.title || 'Car Move'}
				</Text>
				{/* Amount Received */}
				<View style={styles.rightContentChildBox}>
					<Text style={styles.rightContentTextLight}>
						Amount Received
					</Text>
					<Text style={styles.rightContentTextBold}>
						N
						{blessing?.amountReceived.toLocaleString() ||
							'10,000,000'}
					</Text>
				</View>
				{/* Promises Received */}
				<View style={styles.rightContentChildBox}>
					<Text style={styles.rightContentTextLight}>
						Promises Received
					</Text>
					<Text style={styles.rightContentTextBold}>
						{blessing?.promisesReceived.toLocaleString() || '1,000'}
					</Text>
				</View>
			</View>
		</View>
	);
}
