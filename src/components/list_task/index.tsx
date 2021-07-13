import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './style';
import trash from '../../assets/icons/trash/trash.png';
import {BackGround} from '../background';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListTasks} from '../../screen/home';

type ListTaskProps = {
  data: ListTasks;
};

export const ListTask = ({data}: ListTaskProps): JSX.Element => {
  const {id, newTask} = data;
  const [checkTask, setCheckTask] = useState(false);

  const handleStatus = () => {
    setCheckTask(!checkTask);
  };

  const handleDeleTask = async (key: string) => {
    try {
      const fetchTask = await AsyncStorage.getItem('@storage_new_task');
      const checkFetchTask: ListTasks[] = fetchTask
        ? JSON.parse(fetchTask)
        : [];
      if (checkFetchTask !== [] && checkFetchTask !== null) {
        const deleteTask = checkFetchTask.filter(task => task.id !== key);
        await AsyncStorage.setItem(
          '@storage_new_task',
          JSON.stringify(deleteTask),
        );
      }
    } catch {
      Alert.alert('Nao foi possível detetar');
    }
  };

  return (
    <BackGround>
      <TouchableHighlight onPress={handleStatus}>
        {checkTask ? (
          <View style={styles.viewCheck}>
            <Icon size={10} name="check" color="#fff" />
          </View>
        ) : (
          <View style={styles.viewNoCheck} />
        )}
      </TouchableHighlight>
      <Text style={styles.textTask}> {newTask} </Text>
      {checkTask && <View style={styles.viewCheckItem} />}
      <TouchableOpacity onPress={() => handleDeleTask(id)}>
        <Image source={trash} />
      </TouchableOpacity>
    </BackGround>
  );
};
