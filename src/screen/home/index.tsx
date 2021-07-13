import React, {useEffect, useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Header} from '../../components/header';
import {styles} from './style';
import {ListTask} from '../../components/list_task';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ListTasks = {
  id: string;
  newTask: string;
};

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
  /*cuidado com as dependências dos seus useEffect, apenas duas maneiras de usar.
  Se deseja atualização ou apenas na montagem,no caso de atualização precisa
  passar todas dependências , na montagem nao precisa */

  return (
    <View style={styles.viewContainer}>
      <Header />
      <View style={styles.viewContent}>
        <FlatList
          data={newListTask}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListTask data={item} />}
          // eslint-disable-next-line react-native/no-inline-styles
        />
      </View>
    </View>
  );
};
