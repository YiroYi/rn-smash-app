import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';


const MealList = props => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default MealList;
