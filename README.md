# to_do_list-React-native-ingniter
Projeto pessoal usando desing do Figma. Template criado pelos desenvolvedores do Rocketseat  
 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
  * <a href='#Construção' >  Construção </a> 
  * <a href='#Figma'> Figma</a>  
  * <a href='#o-que-eu-aprendi' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>
  * <a href='#Dependencias'> Dependencias </a>

## Visão Geral
## Desafio
- Criar uma aplicação das listagens de tarefas

## Construção
 ![VSCode](https://img.shields.io/badge/-VSCode-0085D1?style=flat-square&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![React Native](https://img.shields.io/badge/-reactnative-212121?style=flat-square&logo=reactnative&logoColor=white)
![typescript](https://img.shields.io/badge/-typescript-EFD81D?style=flat-square&logo=typescript&logoColor=black)
  
## Figma
[Figma](https://www.figma.com/file/k4irWM7G33bGSmX1AlxH9x/to.do-Copy?node-id=10485%3A499)
  

## O que eu aprendi
Reforcei conceitos de técnicas em async storage,funcoes e hooks

Para evitar problemas de  setar o async storage e perder os valores antigos ou sobrescrever os novos, melhor técnica  é utilizar </br>
rest operator e  garantir que esta vazio o async storage. Para isto primeiro eu busco se possui algo </br>
no async storage com get item 'e se possuir  adiciono (...getTask,newTask) o anterior.</br>
Maior dificuldade na realização deste projeto foi conceitual. Async Storage 'e assíncrono então melhor maneira de setar e utilizar<br>
variáveis globais e não os hooks do react, ha vários motivos. Alguns deles: hooks são funcionais, ou seja imutáveis </br>
ao salvar no async storage nao ira salvar o hooks em si,entao quando fizer refresh meu hook estará vazio</br>
para setar uma boa prática e utilizar variável global que no caso não e imutável</br>
Para pegar uso hooks(useEfect e useState) eles são ideias, utilizando useFect da forma correta sempre monto meu useState e<br>
renderizo no componente. Repara que utilizo apenas as variáveis java script para realizar o setItem no Async Storaga</br>
no caso e uma constante newTask e uma constante que vai capturar os antigos dados salvos em oldTask.<br>
Para pegar utilizo setNewListTask. No momento de pegar não preciso utilizar o rest operaor já que estamos tratando no momento de salvar</br>
Por fim coloquei a dependência no useEfect (newListTask) ou seja todo momento que atualizar a lista,sera montada novamente </br>
se não fizer isso so sera montando no momento de montar o componente.mento que atualizar a lista,sera montada novamente </br>
se nao fizer isso so sera montando no momento de montar o componente.

```typescript

export const Header = ({total}: HeaderProps): JSX.Element => {
  const handleAddTask = async () => {
    try {
      const oldTask = await AsyncStorage.getItem('@storage_new_task');
      const getTask = oldTask ? JSON.parse(oldTask) : [];
      const newTasks = {
        id: `${uuid.v4()}`,
        newTask: task,
      };
      await AsyncStorage.setItem(
        '@storage_new_task',
        JSON.stringify([...getTask, newTasks]),
      );
      setTask('');
    } catch {
      Alert.alert('Nao foi possível salvar');
    }
  };

  };
  }
  
/* ----------------------------------------------- */  
 export const HomeScreen = (): JSX.Element => {
  const [newListTask, setNewListTak] = useState<ListTasks[]>([]);
 
  useEffect(() => {
    const fetchGetItem = async () => {
      try {
        const getItem = await AsyncStorage.getItem('@storage_new_task');
        const fetchGetList = getItem ? JSON.parse(getItem) : [];
        if (fetchGetList !== [] && fetchGetList !== null) {
          setNewListTak(fetchGetList);
        }
      } catch {
        Alert.alert('Não foi possível pegar');
      }
    };
    fetchGetItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newListTask]);  
  
 } 
 ```
 
  Utilizei biblioteca nativa do React Native para icons</br> 
 Para utilização preciso editar o  android/app/build.gradle, não  android/build.gradle</br>
 Para finalizar  utilzei tambem o react native link </br>
 
 ```java
 
 apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
 
 project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
 
 ```
 Por fim fiz o uso de fontes customizadas para tal e preciso fazer o download dessas fontes e colocar no projeto</br>
 apos isto precisa na raiz do projeto criar uma pasta  react-native.config.js</b>
 precisa no assets indicar o caminho correto aonde esta as fontes</br>
 depois só precisa chamar elas da forma comum quando estiliza fonte.
 ```javascript
 module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
};

/* ----------------------------- /*

style = {
  fontFamily: "Roboto"
}

/*---------------------------*/
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: 'Roboto'
`;

 
 ```
 

 # Feature
  - Hooks
  - styled component
  - Atomics
  - Media Screen
  - Tipagem
 
# Dependencias 
- [react native linear gratdiente](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [react icons](https://github.com/oblador/react-native-vector-icons)
- [react native async storage](https://react-native-async-storage.github.io/async-storage/docs/install)
- [react native uuid](https://www.npmjs.com/package/react-native-uuid)
