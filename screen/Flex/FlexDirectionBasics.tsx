import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonComponent} from '../../components/ButtonComponent';

const data = [
  {name: 'column', field: 'flexDirection'},
  {name: 'row', field: 'flexDirection'},
  {name: 'row-reverse', field: 'flexDirection'},
  {name: 'column-reverse', field: 'flexDirection'},
  {name: 'flex-start', field: 'justifyContent'},
  {name: 'flex-end', field: 'justifyContent'},
  {name: 'center', field: 'justifyContent'},
  {name: 'space-between', field: 'justifyContent'},
  {name: 'space-around', field: 'justifyContent'},
  {name: 'space-evenly', field: 'justifyContent'},
  {name: 'streach', field: 'alignItems'},
  {name: 'center', field: 'alignItems'},
  {name: 'flex-start', field: 'alignItems'},
  {name: 'flex-end', field: 'alignItems'},
];

export const FlexDirectionBasics: React.FC = () => {
  const [field, setField] = useState<string>('flexDirection');
  const [value, setValue] = useState<string>('column');

  const handleChange = (fieldParam: string, valueFieldParam: string) => {
    setField(fieldParam);
    setValue(valueFieldParam);
  };

  const renderButtons = () => {
    const buttons = [];

    for (let index = 0; index < data.length; index += 2) {
      buttons.push(
        <View key={index} style={styles.container_group_button}>
          <ButtonComponent
            name={data[index].name}
            pressed={handleChange}
            value={value + '-' + field}
            field={data[index].field}
          />
          <ButtonComponent
            name={data[index + 1].name}
            pressed={handleChange}
            value={value + '-' + field}
            field={data[index + 1].field}
          />
        </View>,
      );
    }
    return buttons;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{field}</Text>
      <View style={styles.container_button}>{renderButtons()}</View>
      <View style={styles.areaContainer}>
        <View>
          <Text style={styles.textArea}>{field + ': ' + value}</Text>
        </View>
        <View style={[styles.area, {[field]: value}]}>
          <View style={[styles.box, styles.boxBlue]} />
          <View style={[styles.box, styles.boxLightBlue]} />
          <View style={[styles.box, styles.boxDarkBlue]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  container_button: {
    flex: 5,
  },
  container_group_button: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
  },
  areaContainer: {
    flex: 5,
    backgroundColor: '#F0F8FF',
    marginTop: 10,
  },
  textArea: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 3,
  },
  area: {
    flex: 5,
    backgroundColor: '#F0F8FF',
    borderWidth: 1,
  },
  box: {width: 50, height: 50},
  boxBlue: {backgroundColor: '#B0E0E6'},
  boxLightBlue: {backgroundColor: '#87CEEB'},
  boxDarkBlue: {backgroundColor: '#4682B4'},
});
