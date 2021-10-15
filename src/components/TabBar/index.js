import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const Icon = ({label, focus}) => {
    switch (label) {
      case 'Home':
        return focus ? (
          <Entypo name="home" color="#FF7314" size={24} />
        ) : (
          <Entypo name="home" color="grey" size={24} />
        );
      case 'Up Coming':
        return focus ? (
          <MaterialCI name="play-box-multiple" color="#FF7314" size={24} />
        ) : (
          <MaterialCI name="play-box-multiple" color="grey" size={24} />
        );
      case 'Search':
        return focus ? (
          <Feather name="search" color="#FF7314" size={24} />
        ) : (
          <Feather name="search" color="grey" size={24} />
        );
      default:
        return <Entypo name="home" color="#FF7314" />;
    }
  };

  return (
    <View style={styles.page}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.wrapperTab}>
              <Icon key={index} label={label} focus={isFocused} />
              <Text key={label} style={styles.text(isFocused)}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 8,
    backgroundColor: '#393534',
  },
  wrapperTab: {alignItems: 'center', marginHorizontal: 40},
  text: isFocused => ({color: isFocused ? '#F4F4F4' : 'grey'}),
});
