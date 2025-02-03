import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const USER_NAME = "Muhammad Andri Fahrizal";
export const PROFILE_IMAGE =
  "https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg";

const Header = () => {
  return (
    <SafeAreaView style={{ position: "absolute" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 10,
          alignItems: "center",
        }}
      >
        <Ionicons size={28} name="notifications" color={Colors.notification} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "flex-end", marginEnd: 5 }}>
            <Text style={{ fontSize: 11, color: Colors.text }}>
              Hi, {USER_NAME}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontStyle: "italic",
                fontWeight: "300",
                color: Colors.tint,
              }}
            >
              RANK #5
            </Text>
          </View>
          <Image
            source={{ uri: PROFILE_IMAGE }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default function HomeScreen() {
  // const scrollRef = useAnimatedRef<Animated.ScrollView>();
  // const scrollOffset = useScrollViewOffset(scrollRef);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <Header />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: Colors.background,
          marginTop: 60,
          height: 80,
          marginHorizontal: 20,
          borderRadius: 10,
          padding: 20,
          elevation: 2,
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: Colors.tint,
          borderWidth: 2,
        }}
        onPress={() => router.navigate("../estimation")}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons size={32} name="gift-outline" color={Colors.tint} />
          <View>
            <Text style={{ color: Colors.textSecondary }}>Estimasi</Text>
            <Text style={{ fontSize: 16 }}>Rp1,000,000</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons size={32} name="analytics-outline" color={Colors.tint} />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: Colors.textSecondary }}>Sales</Text>
            <Text style={{ fontSize: 16 }}>5 (unit)</Text>
          </View>
        </View>
      </TouchableOpacity>
      <SafeAreaView
        style={{
          // backgroundColor: Colors.background,
          // height: 80,
          borderRadius: 10,
          padding: 20,
          height: "100%",
          // elevation: 5,
        }}
      >
        <Text style={{ color: Colors.textSecondary, marginBottom: 5 }}>
          AKTIVITAS
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.background,
              paddingVertical: 10,
              borderRadius: 15,
              marginBottom: 10,
              width: 70,
              height: 70,
              paddingHorizontal: 5,
              elevation: 5,
              borderColor: Colors.tint,
              borderWidth: 2,
            }}
            onPress={() => router.navigate("../database")}
          >
            <View style={{ alignItems: "center" }}>
              <Ionicons size={36} name="server" color={Colors.tint} />
              <Text style={{ fontSize: 10, color: Colors.textSecondary }}>
                Database
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.background,
              paddingVertical: 10,
              borderRadius: 15,
              marginBottom: 10,
              width: 70,
              height: 70,
              paddingHorizontal: 5,
              elevation: 5,
              borderColor: Colors.tint,
              borderWidth: 2,
            }}
            onPress={() => router.navigate("../sales-area")}
          >
            <View style={{ alignItems: "center" }}>
              <Ionicons size={36} name="map" color={Colors.tint} />
              <Text style={{ fontSize: 10, color: Colors.textSecondary }}>
                Area Sales
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.background,
              paddingVertical: 10,
              borderRadius: 15,
              marginBottom: 10,
              width: 70,
              height: 70,
              paddingHorizontal: 15,
              elevation: 5,
              borderColor: Colors.tint,
              borderWidth: 2,
            }}
            onPress={() => router.navigate("../rapor")}
          >
            <View style={{ alignItems: "center" }}>
              <Ionicons size={36} name="book" color={Colors.tint} />
              <Text style={{ fontSize: 10, color: Colors.textSecondary }}>
                Rapor
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.background,
              paddingVertical: 10,
              borderRadius: 15,
              marginBottom: 10,
              width: 70,
              height: 70,
              paddingHorizontal: 15,
              elevation: 5,
              borderColor: Colors.tint,
              borderWidth: 2,
            }}
            onPress={() => router.navigate("../simulation")}
          >
            <View style={{ alignItems: "center" }}>
              <Ionicons size={36} name="calculator" color={Colors.tint} />
              <Text style={{ fontSize: 10, color: Colors.textSecondary }}>
                Simulasi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.textSecondary, marginVertical: 5 }}>
          RANKING
        </Text>
        <View
          style={{
            height: 350,
            borderColor: Colors.tint,
            borderWidth: 2,
            backgroundColor: Colors.background,
            elevation: 5,
            borderRadius: 15,
            padding: 10,
          }}
        >
          <FlatList
            data={[
              {
                number: "1",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "2",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "3",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "4",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "5",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "6",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "7",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "8",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "9",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "10",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "11",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "12",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "13",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "14",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "15",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "16",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "17",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "18",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
              {
                number: "19",
                name: "Muhammad Andri Fahrizal",
                image: PROFILE_IMAGE,
                unit: "20",
              },
            ]}
            renderItem={(item) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                  borderBottomWidth: 0.2,
                  borderColor: Colors.textSecondary,
                }}
              >
                <Text
                  style={{
                    width: 35,
                    textAlign: "center",
                    color: Colors.notification,
                  }}
                >
                  #{item.item.number}
                </Text>
                <Image
                  source={{ uri: PROFILE_IMAGE }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                    marginEnd: 10,
                  }}
                />
                <View>
                  <Text>{item.item.name}</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      paddingBottom: 10,
                      color: Colors.textSecondary,
                    }}
                  >
                    {item.item.unit} unit
                  </Text>
                </View>
              </View>
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
