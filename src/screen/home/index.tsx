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
  const [data, setData] = useState<ListTasks[]>([]);

  useEffect(() => {
    const fetchGetItem = async () => {
      try {
        const getItem = await AsyncStorage.getItem('@storage_new_task');
        const fetchGetLIst: ListTasks[] = getItem ? JSON.parse(getItem) : [];
        if (fetchGetLIst !== [] && fetchGetLIst !== null) {
          setData(fetchGetLIst);
        }
      } catch {
        Alert.alert('Não foi possível pegar');
      }
    };
    fetchGetItem();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newListTask, data]);
  /*cuidado com as dependências dos seus useEffect, apenas duas maneiras de usar.
  Se deseja atualização ou apenas na montagem,no caso de atualização precisa
  passar todas dependências , na montagem nao precisa */

  return (
    <View style={styles.viewContainer}>
      <Header setNewListTak={setNewListTak} newListTask={newListTask} />
      <View style={styles.viewContent}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListTask data={item.newTask} listDataTask={data} />
          )}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingBottom: 73}}
        />
      </View>
    </View>
  );
};
