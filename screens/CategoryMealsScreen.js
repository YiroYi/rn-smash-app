import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = itemData => {
    return(
      <View>
        <Text>
          {itemData.item.title}
        </Text>
      </View>
    );
  };

  return(
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
