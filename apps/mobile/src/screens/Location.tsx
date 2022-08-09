import React from 'react';
import { Text, View } from 'react-native';

import tw from '../lib/tailwind';

export default function LocationScreen({ navigation, route }: any) {
	const { id } = route.params;
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<Text style={tw`font-bold text-xl text-white`}>Location {id}</Text>
		</View>
	);
}
