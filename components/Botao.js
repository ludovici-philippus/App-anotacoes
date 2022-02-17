import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Botao(props){
	return(
		<TouchableOpacity onPress={props.pressDo} style={styles.btnAnotacao}>
			<Text style={styles.text, {fontSize: 20, color: 'black'}}>{props.text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btnAnotacao: {
		position: 'absolute',
		right: 20,
		bottom: 20,
		padding: 8,
		paddingHorizontal: 15,
		borderRadius: 50,
		backgroundColor: '#3f9',
	},
	text:{
		textAlign: 'center',
		color: 'white',
		fontSize: 18
	},
});

export default Botao;
