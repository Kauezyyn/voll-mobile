import { VStack, Text, ScrollView, Image } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/titulo";
import Logo from '../assets/Logo.png';



export default function Explorar() {
    return (

        <ScrollView flex={1}>
            <VStack p='7'>
                <VStack p={5} w="100%" borderRadius='lg' shadow='2' bgColor='white'>
                    <EntradaTexto placeholder="Digite sua especialidade"></EntradaTexto>
                    <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>

                    <Botao>Buscar</Botao>
                </VStack>

                <Titulo color='blue.500' alignSelf='center' mb={5}>Resultado da Busca</Titulo>

                {[1, 2, 3].map((_, index) => (
                    <VStack flex={1} alignItems='center' justifyContent='center' bgColor='white' mb={4} key={index}>
                        <CardConsulta
                            nome="Dr .Roberto"
                            especialidade="Urologista"
                            foto="https://github.com/robertomoraesjunior.png"
                        />
                    </VStack>

                ))}


            </VStack>
        </ScrollView>
    )
}