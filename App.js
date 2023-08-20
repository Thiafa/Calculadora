import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import CalculadoraIMC from './src/pages/CalculadoraIMC';
import Calculadora from './src/pages/Calculadora';

export default function App() {
  return <Calculadora />;
}
