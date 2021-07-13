import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {styles} from './style';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/images/logo/logo.png';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListTasks} from '../../screen/home';

type HeaderProps = {
  setNewListTak: React.Dispatch<React.SetStateAction<ListTasks[]>>;
  newListTask: ListTasks[];
};

type ListTask = {
  id: string;
  newTask: string;
};

export const Header = ({
  setNewListTak,
  newListTask,
}: HeaderProps): JSX.Element => {
  const [task, setTask] = useState(' ');
  const [mounted, setMounted] = useState(false);

  const handleAddTask = () => {
    const newTasks = {
      id: `${uuid.v4()}`,
      newTask: task,
    };
    setNewListTak(oldState => [...oldState, newTasks]);
    setMounted(true);
  };

  useEffect(() => {
    const fetchGetTask = async () => {
      try {
        const fetchStorage = await AsyncStorage.getItem('@storage_new_task');
        const listTasks = fetchStorage
          ? JSON.parse(fetchStorage as unknown as string)
          : [];
        /*sempre que trabalhar com async storage em arrays e ideal realizar
                procedimento acima para evitar apagar array anterior*/
        await AsyncStorage.setItem(
          '@storage_new_task',
          JSON.stringify([...listTasks, ...newListTask]),
        );
        setMounted(false);
      } catch {
        Alert.alert('Nao foi possível salvar');
      }
    };
    if (mounted) {
      fetchGetTask();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newListTask, mounted]);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <Image source={Logo} />
        <Text style={styles.textSubTitle}> Você tem 3 tarefas</Text>
      </View>
      <View style={styles.viewFooter}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#B2B2B2"
          onChangeText={setTask}
          autoFocus={true}
        />
        {/*touchableHighlight e melhor para text inputs */}
        <TouchableHighlight
          activeOpacity={0.7}
          onPress={handleAddTask}
          style={styles.buttonFooter}>
          <Icon name="chevron-forward-outline" size={30} color="#B2B2B2" />
        </TouchableHighlight>
      </View>
    </View>
  );
};
