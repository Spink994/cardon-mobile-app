import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	recentContainer: {
		marginTop: 48,
	},

	textHeader: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Medium',
		marginBottom: 8,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 24,
		paddingRight: 24,
		marginBottom: 12,
	},

	viewAll: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Bold',
	},

	recentBlessingCard: {
		height: 72,
		width: 340,
		borderRadius: 8,
		gap: 12,
		backgroundColor: '#120D16',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 12,
		flexDirection: 'row',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#201828',
		marginBottom: 18,
	},

	rightSideOfCard: {
		width: 266,
		gap: 6,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	pending: {
		color: '#FFD100',
		textTransform: 'capitalize',
	},

	fulfilled: {
		color: '#00C159',
		textTransform: 'capitalize',
	},

	title: {
		color: 'white',
		fontSize: 12,
		fontFamily: 'Poppins-Bold',
	},

	status: {
		color: 'white',
		fontSize: 12,
		fontFamily: 'Poppins-Medium',
	},
	message: {
		color: 'white',
		fontSize: 12,
		fontFamily: 'Poppins-Medium',
	},
	time: {
		color: 'white',
		fontSize: 12,
		fontFamily: 'Poppins-Medium',
	},

	listContainer: {
		marginTop: 12,
		width: 340,
	},
});

export default styles;
