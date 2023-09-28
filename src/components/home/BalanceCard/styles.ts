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
		width: 340,
		marginRight: 24,
		borderRadius: 16,
		justifyContent: 'space-between',
		paddingTop: 24,
		paddingBottom: 24,
		alignItems: 'center',
		backgroundColor: '#8547ED',
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
