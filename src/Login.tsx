import { VStack, Image, Text, Box, Link, useToast } from 'native-base';
import Logo from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/titulo';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/autenticacaoServicos';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

export default function Login({ navigation } : any) {
    const [email,setEmail]= useState('');
    const [senha, setSenha] = useState('');
    const[carregando, setCarregando] = useState(true)
    const toast = useToast();

    useEffect(() => {
        AsyncStorage.removeItem('token')
        async function verificarLogin() {
            const token = await AsyncStorage.getItem('token')
            if(token){
                navigation.replace('Tabs')
                
            }
            setCarregando(false)
        }
        verificarLogin()
    },[])

    {/* Function do login para navegação //nesse resultado ele pega o email e senha  */}
    async function login() {
        const resultado = await fazerLogin(email, senha)
        if(resultado){
            const { token } = resultado
            AsyncStorage.setItem( 'token', token ) //essa função é para armazernar no dispositivo (cache)

            // o token decodificado é oque vimos la no insomini que é o email e senha decodificado 
           const tokenDecodificado = jwtDecode(token)as any //as any é para ler tudo, ele lê caracteres especiais 
            const pacienteId = tokenDecodificado.id 
            AsyncStorage.setItem('pacienteId', pacienteId)
            navigation.replace('Tabs')
        }else{
            console.log('Erro');
            toast.show({
                title: "Erro no login",
                description: "O email ou senha nao conferem",
                backgroundColor: "red.500"

            })
        }
    }
    if(carregando){
        return null
    }

    return (
        <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
            <Image source={Logo} alt='Login'></Image>
            <Titulo>
                Faça Login em sua conta
            </Titulo>
            <Box>
                {/* Email */}
                <EntradaTexto 
                placeholder='Insira seu email' 
                label='Email' 
                value={email} 
                onChangeText={setEmail}
                />
                {/* Senha */}
                <EntradaTexto 
                placeholder='Insira sua senha' 
                label='Senha' 
                secureTextEntry={true} 
                value={senha} 
                onChangeText={setSenha}
                />

            </Box>

            {/* O Botão executa a função do login para levar os dados de email e senha /hipotese(para o banco) */}
            <Botao onPress={login}>
                Entrar
            </Botao>

            {/* Link que leva para o suporte da google para passos caso o usuario esqueça a senha */}
            <Link href='https://google.com.br' mt={2}>Esqueceu sua senha?</Link>
            <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={2}>
                <Text>Ainda não tem cadastro?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
                    <Text color={'blue.500'}>Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}