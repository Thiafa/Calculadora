import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { customEvaluate } from '../helpers/calc';

const isOperator = (char) => {
  if (char == '=') {
    return styles.btnTextEqual;
  }
  return ['+', '-', '*', '/', '%', '^', '()', 'x', '='].includes(char)
    ? styles.btnTextElement
    : styles.btnText;
};

export default function Calculadora() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState(null);
  const [history, setHistory] = useState(() => {
    if (expressao && resultado) {
      return `${expressao}=${resultado}`;
    } else {
      return null;
    }
  });

  const elements = [
    ['AC', 7, 4, 1, '.'],
    ['()', 8, 5, 2, 0],
    ['%', 9, 6, 3, '+/-'],
    ['/', 'x', '-', '+', '='],
  ];

  const handleButtonPress = (value) => {
    if (value == '=') {
      setResultado(customEvaluate(expressao));
    } else {
      if (value == 'AC') {
        setExpressao('');
        setResultado();
        setHistory(expressao && resultado ? `${expressao}=${resultado}` : null);
      } else {
        setExpressao(expressao + value);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.history}>{history && history}</Text>
      </View>
      <View>
        <Text style={styles.expressao}>{expressao}</Text>
      </View>
      <View>
        <Text style={styles.resultado}>= {resultado || expressao}</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.inside}>
          {elements.map((element, index) => (
            <View key={index} style={styles.row}>
              {element.map((item) => (
                <TouchableOpacity
                  onPress={() => handleButtonPress(item)}
                  style={styles.btn}
                  key={item}
                >
                  <Text style={isOperator(item)}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: 30,
    width: 300,
    // backgroundColor: "#23272E",
    backgroundColor: '#fffff',
  },
  container: {
    flex: 1,
    width: '100%',
    // height: '100%',
    backgroundColor: '#1A1D24',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  box: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#23272E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inside: {
    width: '90%',
    height: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    height: 100,
    width: 100,
    padding: 20,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  btnTextElement: {
    fontSize: 20,
    color: '#20CE72',
    textAlign: 'center',
  },
  btnTextEqual: {
    fontSize: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#20CE72',
    color: '#fff',
    textAlign: 'center',
    margin: 0,
  },
  operator: {
    color: '#1A1D24',
  },
  expressao: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  history: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 20,
  },
  resultado: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20,
  },
});
