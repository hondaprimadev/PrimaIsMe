import { Colors } from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import RNPickerSelect from "react-native-picker-select";
import { useState } from "react";

export default function SalesArea() {
  const [selectedValue, setSelectedValue] = useState("item1");
  return (
    <>
      <Stack.Screen
        options={{ title: "Kalkulator Gaji", statusBarColor: Colors.tint }}
      />
      <Animated.ScrollView style={styles.container}>
        <View
          style={{
            borderColor: Colors.textSecondary,
            borderRadius: 5,
            borderWidth: 1,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => {
              setSelectedValue(value);
            }}
            items={[
              { label: "KAPOS", value: "item1" },
              { label: "SALESMAN", value: "item2" },
              { label: "COUNTER SALES", value: "item3" },
            ]}
            placeholder={{ label: "Pilih Jabatan....", value: "null" }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            padding: 10,
            marginBottom: 20,
          }}
        >
          Yuk, kasih tahu berapa yang ingin kamu Jual! 😄
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 16, width: "30%" }}>TUNAI</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              padding: 10,
              width: "70%",
              borderRadius: 5,
            }}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 16, width: "30%" }}>KREDIT</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              padding: 10,
              width: "70%",
              borderRadius: 5,
            }}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 16, width: "30%" }}>TOTAL</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: Colors.textSecondary,
              padding: 10,
              width: "70%",
              borderRadius: 5,
            }}
            placeholder="0"
            keyboardType="numeric"
            readOnly
          />
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.tint,
            elevation: 2,
            padding: 15,
            borderRadius: 25,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 18, color: Colors.textLight }}>SUBMIT</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
});
