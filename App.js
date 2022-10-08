import { useLazyQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { Box, HStack } from "native-base";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GET_STARSHIP } from "./apollo-queries/demo";

export default function App({ navigation }) {
  // Imperial I-class Star Destroyer
  const defaultStarshipId = "c3RhcnNoaXBzOjM=";

  const [starshipId, setStarshipId] = useState(defaultStarshipId);
  const [fetchStarship, { data, error, loading }] = useLazyQuery(GET_STARSHIP, {
    variables: { id: starshipId },
  });

  if (error) {
    console.log("Error fetching starship", error);
  }

  useEffect(() => {
    console.log("In useEffect, fetchStarship");
    fetchStarship();
  }, []);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  const starShip = React.useMemo(() => {
    if (!data?.starship) return;
    let starship = data.starship;

    return (
      <Box alignItems={"center"}>
        <HStack>
          <Text>{starship.name}</Text>
          <Text>{starship.model}</Text>
          <Text>{starship.crew}</Text>
        </HStack>
      </Box>
    );
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>This is the updated App File</Text>
      <StatusBar style="auto" />

      {starShip}

      <Button title="Sign Up" />
      <Button title="Log In" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderColor: "black",
    borderWidth: 2,
  },
});
