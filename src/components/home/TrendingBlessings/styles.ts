import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	trendingContainer: {
		marginTop: 48,
	},

	textHeader: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Medium',
		paddingLeft: 24,
		marginBottom: 8,
	},

	mainContentContainer: {
		flexDirection: 'row',
		paddingLeft: 12,
		gap: 8,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#120D16',
		width: 340,
		height: 191,
		borderRadius: 16,
		marginRight: 24,
	},

	leftContentContainer: {
		alignItems: 'center',
		paddingTop: 12,
		width: 106,
		height: 159,
		borderRadius: 16,
		backgroundColor: '#201828',
	},

	handle: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins-Bold',
	},

	otherText: {
		color: 'white',
		fontSize: 10,
		fontFamily: 'Poppins-Medium',
	},

	petNameContainer: {
		flexDirection: 'row',
		gap: 2,
	},

	rightContentContainer: {
		width: 197,
		gap: 4,
	},

	rightContentTextBold: {
		color: 'white',
		fontFamily: 'Poppins-Bold',
		fontSize: 14,
	},

	rightContentTextLight: {
		color: '#E6E6E7',
		fontFamily: 'Poppins-Medium',
		fontSize: 12,
	},

	rightContentChildBox: {
		marginBottom: 4,
		backgroundColor: '#201828',
		borderRadius: 8,
		padding: 8,
		width: 197,
		height: 61,
	},
});

export default styles;
