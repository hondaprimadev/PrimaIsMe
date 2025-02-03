import { Colors } from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function SalesArea() {
  const [selectedValue, setSelectedValue] = useState("item1");
  return (
    <>
      <Stack.Screen
        options={{ title: "Simulasi Angsuran", statusBarColor: Colors.tint }}
      />
      <View style={styles.container}>
        <Text>PILIH TIPE</Text>
        <View
          style={{
            borderColor: Colors.textSecondary,
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 20,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => {
              setSelectedValue(value);
            }}
            items={[
              { label: "BeAT Sporty", value: "item1" },
              { label: "BeAt Sporty Plus", value: "item2" },
              { label: "Vario 125", value: "item3" },
              { label: "Vario 125 Plus", value: "item3" },
              { label: "Vario 160", value: "item3" },
              { label: "New PCX 160", value: "item3" },
              { label: "New ADV 160", value: "item3" },
            ]}
          />
        </View>
        <Text>PILIH TENOR</Text>
        <View
          style={{
            borderColor: Colors.textSecondary,
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 20,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => {
              setSelectedValue(value);
            }}
            items={[
              { label: "11 Bulan", value: "item1" },
              { label: "17 Bulan", value: "item1" },
              { label: "23 Bulan", value: "item1" },
              { label: "29 Bulan", value: "item1" },
              { label: "35 Bulan", value: "item1" },
              { label: "47 Bulan", value: "item1" },
            ]}
          />
        </View>
        <Text>PILIH UANG MUKA</Text>
        <View
          style={{
            borderColor: Colors.textSecondary,
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 20,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => {
              setSelectedValue(value);
            }}
            items={[
              { label: "Rp1,000,000", value: "item1" },
              { label: "Rp2,000,000", value: "item1" },
              { label: "Rp3,000,000", value: "item1" },
              { label: "Rp4,000,000", value: "item1" },
              { label: "Rp5,000,000", value: "item1" },
            ]}
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          NOMINAL ANGSURAN
        </Text>
        <View
          style={{
            borderColor: Colors.tint,
            borderWidth: 2,
            borderRadius: 5,
            padding: 5,
            width: "70%",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 36 }}>Rp778,000</Text>
        </View>
      </View>
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
