import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "./components/Header";
import Botao from "./components/Botao";

export default function App() {
	const [estado, setEstado] = useState("leitura");
	const [anotacao, setAnotacao] = useState("");

	useEffect(() => {
		(async () => {
			try{
				const anotacaoLeitura = await AsyncStorage.getItem("anotacao");
				setAnotacao(anotacaoLeitura);
			}catch(error){}
		})();
	}, []);

	const setData = async() =>{
		try{
			await AsyncStorage.setItem('@anotacao', anotacao);
			alert("Sua anotação foi salva!");
		}catch(error){
			alert("Erro ao salvar!");
		}
	}

	function atualizarTexto(){
		setEstado('leitura');
		setData();
	}


	if(estado == "leitura"){
		return (
			<View style={{flex: 1}}>
				<Header/>		
				{
				(anotacao != '') ?
				<View style={{padding: 20}}>
					<Text style={styles.anotacao}>{anotacao}</Text>
				</View>
				:
				<View style={{padding: 20}}>	
					<Text style={styles.anotacao, {opacity: 0.3}}>Nenhuma anotação encontrada :(</Text>
				</View>
				}
				{
					(anotacao == '') ?
					<Botao pressDo={() => setEstado("atualizando")} text="+"/>
					:
					<Botao pressDo={() => setEstado("atualizando")} text="Editar"/>
				}
			
	    	</View>
		);	
	}else if(estado == "atualizando"){
		return(
			<View style={{flex: 1}}>
				<Header/>
				<TextInput style={{paddingHorizontal: '2%', textAlignVertical: 'top', minHeight: '30%', backgroundColor: 'rgb(245,245,245)', paddingTop: 20}} onChangeText={(text) => setAnotacao(text)} autoFocus={true} multiline={true} numberOfLines={5} value={anotacao} placeholder={"Escreva sua anotação aqui"}></TextInput>	
				<Botao pressDo={() => atualizarTexto()} text="Salvar"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	text:{
		textAlign: 'center',
		color: 'white',
		fontSize: 18
	},
	anotacao: {
		fontSize: 13,
	},

});
