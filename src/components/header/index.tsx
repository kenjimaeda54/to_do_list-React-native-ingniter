import React, {useState} from 'react';
import {styles} from './style';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {ListTasks} from '../../screen/home';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/images/logo/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

type HeaderProps = {
  total: ListTasks[];
};

export const Header = ({total}: HeaderProps): JSX.Element => {
  const [task, setTask] = useState(' ');

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

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <Image source={Logo} />
        <Text style={styles.textSubTitle}>
          Você tem {total.length} ite{total.length > 0 ? 'ns' : 'm'}
        </Text>
      </View>
      <View style={styles.viewFooter}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#B2B2B2"
          onChangeText={setTask}
          autoFocus={true}
          value={task}
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
