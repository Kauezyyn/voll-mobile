import { VStack, Text, Divider, ScrollView, Box, Image } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/titulo";
import Logo from '../assets/Logo.png';
export default function Principal() {
    return (
        <ScrollView>

            <Image source={Logo} alt="logo" mt='5'></Image>

            <VStack p={7} alignItems='center'>
                <Titulo color='blue.500' >Boas Vindas</Titulo>
                <VStack p={5} w="100%" borderRadius='lg' shadow='2' bgColor='white' mb={5}>
                    <EntradaTexto placeholder="Digite sua especialidade"></EntradaTexto>
                    <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>

                    <Botao>Buscar</Botao>
                </VStack>

                <Titulo color='blue.800' mb={5}>Depoimentos</Titulo>

                <Box flex={1} alignItems='center' justifyContent='center' >
                    <Text fontSize='sm'>Antes do Grupo nÓs eu só saía para lugares junto com o abrigo. Agora, além de sair com outros meninos da minha idade, aprendi a usar o transporte e consigo pensar sozinho o caminho de um lugar pra outro!"</Text>
                    <Titulo fontSize='md' color='gray' mb={4}>Gabriel, em seu 1º ano no Grupo nÓs</Titulo>
                    <Divider mt={5} mb={5} />

                    <Text fontSize='sm'>Ser educadora é um desafio e tanto, e os encontros de formação me deram maior noção sobre as crianças e adolescentes e sobre o direito à convivência familiar e comunitária. Aprendi que a criança e o adolescente acolhidos devem ser tratados com todos os direitos que tem</Text>
                    <Titulo fontSize='md' color='gray' mb={4}>Marcela Nascimento, profissional de serviço de acolhimento</Titulo>

                    <Divider mt={5} mb={5} />

                    <Text fontSize='sm'>Olá Capítulo ! É com muito orgulho da equipe da Capitulo I que recebo a carta projeto para o próximo semestre, porque vejo muito do pequeno Arthur nesses interesses, como musicas e historinhas com o tema abordado. Me tranqüiliza saber como o assunto será explorado e trazido à realidade deles, de uma forma também lúdica e educativa. Parabéns à equipe de professoras, sempre carinhosas e atentas aos interesses e desenvolvimento dos pequenos.Conte comigo nesse jardim! Abraços,</Text>
                    <Titulo fontSize='md' color='gray' mb={4}>Lais (mãe do Arthur GIB)</Titulo>
                    <Divider mt={5} mb={5} />

                    <Text fontSize='sm'>eu e meu marido nos sentimos felizes em podermos proporcionar para Maria uma escola/educação focada na formação de indivíduos criativos, pensantes, desde cedo aprendendo a trabalhar em grupo e com isso descobrindo o valor e importância da amizade e companheirismo!</Text>
                    <Titulo fontSize='md' color='gray' mb={4}>Rita mãe da Maria Carolina GIIIA</Titulo>
                </Box>
            </VStack>
        </ScrollView>
    )
}