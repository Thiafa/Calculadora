import {React, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Pressable } from 'react-native';

export default function Calculadora() {
  const  [peso, setPeso]= useState();
  const  [altura,setAltura]= useState();
  const  [mensagem,setMensagem]= useState('');
  
  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100;

      const imc = peso / (alturaMetros * alturaMetros);

      let resultadoMensagem = '';
      if (imc < 18.5) {
        resultadoMensagem = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        resultadoMensagem = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        resultadoMensagem = 'Sobrepeso';
      } else {
        resultadoMensagem = 'Obesidade';
      }

      setMensagem(`Seu IMC é ${imc.toFixed(2)}. ${resultadoMensagem}`);
    } else {
      setMensagem('Preencha peso e altura para calcular o IMC.');
    }
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Calcular IMC</Text>
      {/* <Text style={styles.h2}>Calculando IMC</Text> */}
      <View>
        <TextInput style={styles.input} placeholder='Peso (emkg)'
        value={peso} onChangeText={setPeso}/>

        <TextInput style={styles.input}
        value={altura} onChangeText={setAltura} placeholder='Altura (em cm)'/>
        
        <Pressable
        style={styles.inputbtn}
        onPress={calcularIMC}
        title="Calcular"
      >
        <Text style={styles.textbtn}>Calcular</Text>
        </Pressable>
      <Text>{mensagem && mensagem}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 25
  },
  h2:{
    fontSize: 15
  },
  textbtn:{
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  inputbtn: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#f194ff",
    borderRadius: 5,
  }
});
