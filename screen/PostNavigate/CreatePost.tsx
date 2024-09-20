import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

interface ComponentProps {
  navigation: any;
}
export const CreatePost: React.FC<ComponentProps> = ({navigation}) => {
  const [postText, setPostText] = useState('');

  return (
    <View>
      <TextInput value={postText} onChangeText={setPostText} />
      <Button
        title="Enviar"
        onPress={() =>
          navigation.navigate({name: 'Home', params: {post: postText}})
        }
      />
    </View>
  );
};
