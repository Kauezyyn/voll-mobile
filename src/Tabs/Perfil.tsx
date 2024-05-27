import { VStack, Text, Avatar, ScrollView, Divider } from "native-base";
import { Titulo } from "../componentes/titulo";
import { Temas } from "../estilos/temas";


export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar size="xl" source={{uri: "https://github.com/robertomoraesjunior.png"}}/>

                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg">Kauê Cunha Strozzi</Titulo>
                <Titulo>03/11/2005</Titulo>
                <Titulo>Votuporanga / SP</Titulo>

                <Divider mt={5}></Divider>
                <Titulo color="blue.500">Historico Médico</Titulo>
                <Text fontSize={18}>Bronquite</Text>
                <Text fontSize={18}>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}