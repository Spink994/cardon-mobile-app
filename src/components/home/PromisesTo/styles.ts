import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	auxillary: {
		paddingLeft: 24,
		paddingRight: 24,
	},
	mainContainer: {
		paddingTop: 12,
		backgroundColor: '#040008',
		height: '100%',
	},

	slide: {
		flex: 1,
		flexDirection: 'row',
		width: 340,
		marginRight: 24,
		borderRadius: 16,
		paddingTop: 24,
		paddingBottom: 24,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: '#8547ED',
	},

	slideFirstChild: {
		borderTopColor: 'transparent',
		borderBottomColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: '#FFFFFF',
		borderStyle: 'solid',
		borderWidth: 1,
		paddingRight: 8,
		alignItems: 'center',
		gap: 12,
		textLabel: {
			fontFamily: 'Poppins-Medium',
			color: '#fff',
			fontSize: 14,
		},
	},

	slideSecondChild: {
		paddingLeft: 8,
		alignItems: 'flex-start',

		boxContainer: {
			borderRadius: 8,
			marginBottom: 8,
			gap: -4,
			backgroundColor: 'rgba(255,255,255,0.3)',
			height: 66,
			padding: 6,
			width: 140,
		},

		label: {
			fontFamily: 'Poppins-Medium',
			color: '#fff',
			fontSize: 13,
		},
	},

	textLabel: {
		fontFamily: 'Poppins-Medium',
		color: '#fff',
		fontSize: 14,
	},

	textBalance: {
		color: '#FFFFFF',
		fontFamily: 'Poppins-Bold',
		fontSize: 36,
	},

	cardBalanceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},

	balanceToggler: {
		marginBottom: 6,
	},

	withdrawBalance: {
		height: 56,
		borderRadius: 50,
		backgroundColor: 'white',
		width: 212,
		alignItems: 'center',
		justifyContent: 'center',
		// Balance text
		withdrawBalanceText: {
			color: 'black',
			fontFamily: 'Poppins-Medium',
			fontSize: 16,
		},
	},
});

export default styles;
