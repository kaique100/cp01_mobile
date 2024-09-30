import { View, Text, Button, Alert, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Para redirecionar o usuário


export default function Home() {

  const navigation = useNavigation(); // Obtemos a instância de navegação

  // Função para deslogar
  const handleLogout = async () => {
    try {
      // Remove o dado de login (exemplo: token de autenticação)
      await AsyncStorage.removeItem('token');

      // Exibe um alerta de confirmação
      Alert.alert('Deslogado com sucesso');

      // Redireciona o usuário para a tela de login (substitua 'LoginPage' pelo nome da sua rota de login)
      navigation.replace('Login'); // `replace` substitui a tela atual no stack para impedir que o usuário volte ao dashboard
    } catch (error) {
      console.log('Erro ao deslogar:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <Image
          source={require('./assets/gato1.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./assets/gato2.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./assets/gato3.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./assets/gato4.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./assets/gato5.jpg')}
          style={styles.image}
        />
        <Button
          title="Deslogar"
          onPress={handleLogout}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
