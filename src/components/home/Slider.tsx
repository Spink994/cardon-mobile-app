import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Slider({ children }: { children: React.ReactNode }) {
	return (
		<ScrollView
			style={styles.wrapper}
			showsHorizontalScrollIndicator={false}
			horizontal
			scrollEnabled
		>
			{children}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		gap: 24,
		paddingLeft: 24,
	},
});
