import { VStack,Text,Avatar } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas(){
    return(
        <VStack p="5">
             <Avatar size="xl" source={{uri: "https://github.com/robertomoraesjunior.png"}}/>
            <Text>Consultas</Text>
            <CardConsulta
            nome="Dr .Roberto"
            especialidade="Urologista"
            foto= "https://github.com/robertomoraesjunior.png"
            data="20/06/2024"
            foiAtendido
            foiAgendado
            />
        </VStack>
    )
}