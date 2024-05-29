import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/titulo'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pegarDadosPaciente } from '../servicos/PacienteServico'
import { Paciente } from '../interfaces/Paciente'
import { Botao } from '../componentes/Botao'


export default function Perfil({navigation}){
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)
  

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId')
      if(!pacienteId) return null
      const resultado = await pegarDadosPaciente(pacienteId)
      if(resultado){
        setDadosPaciente(resultado)
        console.log(resultado)
      }
    }
    dadosPaciente()
  })
  function desloga(){

    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('pacienteId')
    navigation.replace('Login')

  }
  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: "https://github.com/robertoSRMJunior.png" }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>{dadosPaciente.nome}</Titulo>
        <Text>{dadosPaciente?.email}</Text>
        <Text>{dadosPaciente?.endereco?.estado}</Text>
        <Text></Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        {dadosPaciente.planosSaude?.map((plano,index) => (
          <Text key={index}>{plano}</Text>
        ))
        }
        <Botao onPress={desloga}>Deslogar</Botao>
        
      </VStack>
    </ScrollView>
  )
}