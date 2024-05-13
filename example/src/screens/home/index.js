import React, {Component} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';

import Button from 'src/components/Button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hi John, Welcome back!</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
        voluptatum expedita deserunt? Totam dolores hic, tempora atque quisquam
        deserunt ea labore ad unde sapiente odit beatae blanditiis, iure
        suscipit voluptate est assumenda, explicabo magni aspernatur recusandae
        dolorem! Aperiam consequuntur enim animi voluptas saepe earum eaque,
        dignissimos perspiciatis facere culpa ab esse ipsa dolorem quia repellat
        nulla, rerum quos ipsum perferendis eum. Quasi voluptatibus doloremque
        consectetur, et similique earum numquam impedit animi corporis. Quae
        dolorem ipsam aut ducimus voluptas sint dicta impedit, sit deleniti nam.
        Dolore quasi velit deserunt a quas excepturi debitis consequatur error
        consectetur ipsam repudiandae libero dolorum ab, veritatis cumque quia
        molestiae accusamus? Nesciunt assumenda iusto qui dolore. Mollitia culpa
        nam ut necessitatibus voluptatum praesentium neque ab excepturi.
        Nesciunt architecto placeat esse voluptatem iste tempore aliquid
        veritatis ab delectus ullam? Nulla adipisci natus numquam commodi
        tempora et, recusandae est accusantium amet cum iste dolorem rem
        expedita velit dolores quo id. Laboriosam ab dolor fugit earum non nemo
        magnam quisquam, eaque eveniet explicabo nihil quia unde perferendis!
        Hic atque dolorem accusantium corrupti consequatur veritatis ducimus
        nihil dolorum amet ea iste impedit, cupiditate alias commodi sunt,
        voluptates modi est adipisci quis numquam recusandae suscipit ipsam
        cumque fuga? Eveniet, laboriosam ipsa?
      </Text>
      <Button
        text="Go To Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </ScrollView>
  );
};

export default Home;
