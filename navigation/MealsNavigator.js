import React from 'react';

import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import Colors from '../constants/Colors';

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
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
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
                screen:FavoritesScreen,
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

export default createAppContainer(MealsFavTabNavigator);
