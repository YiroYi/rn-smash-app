import React from 'react';

import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';


import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen:CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
    navigationOptions: {

    }
  },
  MealDetail: MealDetailScreen
},{
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
},{
  defaultNavigationOptions: defaultStackNavOptions
});

const tabsScreenConfig = {
    Meals: {
            screen: MealsNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                return (
                  <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                       />
                );
              },
              tabBarColor: Colors.primaryColor
            }
          },
    Favorites: {
                screen: FavNavigator,
                navigationOptions: {
                  tabBarLabel: 'Favorites',
                  tabBarIcon: (tabInfo) => {
                    return <Ionicons
                            name='ios-star'
                            size={25}
                            color={tabInfo.tintColor}
                           />
                  },
                  tabBarColor: Colors.accentColor
                }
                }
  }

const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabsScreenConfig, {
    activeTintColor: Colors.accentColor,
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  })
  : createBottomTabNavigator(tabsScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
});


const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
