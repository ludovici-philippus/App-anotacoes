import {Text, View, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

function Header(props){
	return(
		<View>
			<StatusBar style="light"/>				
			<View style={styles.header}><Text style={styles.text}>Aplicativo anotação</Text></View>
		</View>
	);
}

const styles = StyleSheet.create({
	header:{
		width: '100%',
		padding: 20,
		backgroundColor: '#069'
	},
	text:{
		textAlign: 'center',
		color: 'white',
		fontSize: 18
	},
});

export default Header;
