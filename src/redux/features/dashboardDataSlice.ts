/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

// Define a type for the slice state
interface DashboardState {
	overviewData: {
		wallet: {
			label: string;
			balance: number;
			hidden: boolean;
		};
		promisesFrom: {
			label: string;
			children: Array<{ id: number; label: string; value: number }>;
		};
		promisesTo: {
			label: string;
			children: Array<{ id: number; label: string; value: number }>;
		};
	} | null;

	trendingBlessings: Array<{
		id: number;
		handle: string;
		followersCount: number;
		petName: string;
		title: string;
		amountReceived: number;
		promisesReceived: number;
	}>;

	recentBlessings: Array<{
		id: number;
		image: string;
		title: string;
		message: string;
		status: 'fulfilled' | 'pending';
		time: string;
	}>;
}

// Define the initial state using that type
const initialState: DashboardState = {
	overviewData: {
		wallet: {
			label: 'Total wallet balance',
			balance: 50_000,
			hidden: false,
		},
		promisesFrom: {
			label: 'Promises from Others',
			children: [
				{ id: 1, label: 'Received Promises', value: 1_102 },
				{ id: 2, label: 'Blessings', value: 1_000 },
			],
		},
		promisesTo: {
			label: 'Promises to Others',
			children: [
				{ id: 3, label: 'Promises made', value: 100 },
				{ id: 4, label: 'Giveaways', value: 4 },
			],
		},
	},

	trendingBlessings: [
		{
			id: 5,
			handle: '@chuks',
			followersCount: 5,
			petName: 'Champion',
			title: 'Car Move',
			amountReceived: 10_000_000,
			promisesReceived: 1000,
		},
		{
			id: 6,
			handle: '@flygirl_',
			followersCount: 5,
			petName: 'Idan',
			title: 'Switz Adventure',
			amountReceived: 5_000_000,
			promisesReceived: 2000,
		},
		{
			id: 7,
			handle: '@grace-p',
			followersCount: 3,
			petName: 'Sugar Mummy',
			title: 'December Flex',
			amountReceived: 7_000_000,
			promisesReceived: 3000,
		},
	],

	recentBlessings: [
		{
			id: 7,
			message: '@davido sent you 50,000',
			title: 'Blessings don drop!',
			time: '2mins ago',
			status: 'fulfilled',
			image: '../../../assets/images/davido.png',
		},
		{
			id: 8,
			message: '@havy promised you 10,000',
			title: 'Blessings don drop!',
			time: '2mins ago',
			status: 'pending',
			image: '../../../assets/images/havy.png',
		},
		{
			id: 9,
			message: '@mufasa sent you 100,000',
			title: 'Blessings don drop!',
			time: '2mins ago',
			status: 'fulfilled',
			image: '../../../assets/images/mufasa.png',
		},
		{
			id: 10,
			message: '@iniedo sent you 100,000',
			title: 'Blessings don drop!',
			time: '2mins ago',
			status: 'fulfilled',
			image: '../../../assets/images/iniedo.png',
		},
	],
};

export const dashboardDataSlice = createSlice({
	name: 'dashboard',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
});

export const {} = dashboardDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getDashboardData = (state: RootState) => state.dashboard;

export default dashboardDataSlice.reducer;
