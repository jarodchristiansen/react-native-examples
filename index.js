import React from "react";
import { AppRegistry, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import App from "./App";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";

// see: https://github.com/graphql/swapi-graphql
const GRAPHQL_API_URL =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";

// Initialize Apollo Client

const httpLink = new HttpLink({
  //   uri: "localhost:4000/graphql",
  uri: GRAPHQL_API_URL, // Used for test queries on frontend
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createBottomTabNavigator();



const Appplication = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  </ApolloProvider>
);

AppRegistry.registerComponent("main", () => Appplication);
