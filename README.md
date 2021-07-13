# to_do_list-React-native-ingniter
Projeto pessoal usando desing do Figma. Template criado pelos desenvolvedores do Rocketseat  
 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
  * <a href='#Construção' >  Construção </a>   
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
  

## O que eu aprendi
Reforcei conceitos de técnicas em async storage,funcoes e hooks

Para evitar problemas de  setar o async storage e perder os valores antigos ou sobescrever os novos, melhor tenica 'e utilizar </br>
rest operator e  garantir que esta vazio o async storage. Para isto primeiro eu busco se possui algo </br>
no async storage com get item 'e se possuir  adiciono (...getTask,newTask) o anterior.
Maior dificuldade na realizacao deste projeto foi conceitual. Async Storage 'e assincrono entao melhro maneira de setar e utilizar
variaveis globais e nao os hooks do react, ha varios motivos. Alguns deles: hooks sao funcionais ou seja imutaveis </br>
ao salvar no async storage nao ira salvar o hooks em si,entao quando fizer refresh meu hook estara vazio</br>
para setar uma boa pratica e utilizar variavel glboal que no caso nao e imutavel</br>
Para pegar uso hooks(useEfect e useState) eles sao ideias,utilizando useFect da forma correta sempre monto meu useState e 
renderizo no componente. Repara que utilizo apenas as variaveis java script para realizar o setItem no Async Storaga</br>
no caso e uma constante newTask e uma constatne que vai caputrar os antigos dados salvos em oldTask.
Para pegar utilizo setNewListTask. No momento de pegar nao preciso utlizar o rest operaor ja que estamos tratando no momemnto de salvar</br>
Por fim coloquei a dependencia no useEfect (newListTask) ou seja todo momento que atualizar a lista,sera montada novamente </br>
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

 # Feature
  - Hooks
  - styled component
  - Atomics
  - Media Screen
  - Tipagem
 

