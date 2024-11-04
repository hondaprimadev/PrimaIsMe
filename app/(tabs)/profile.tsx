import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PROFILE_IMAGE } from '.';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        marginTop: 32,
        flex: 1,
        paddingHorizontal: 20
      }}
    >
      <View style={{ flexDirection: "column", gap: 10, alignItems: "center", elevation: 2, borderRadius: 15, paddingVertical: 20, backgroundColor: Colors.background }}>
        <Image
          source={{ uri: PROFILE_IMAGE }}
          style={{ height: 80, width: 80, borderRadius: 50, borderWidth: 2, borderColor: Colors.tint }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>MUHAMMAD ANDRI FAHRIZAL</Text>
          <Text style={{ fontSize: 12 }}>Pos Brangsong</Text>
          <Text style={{ fontSize: 12 }}>KENDAL</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 10, elevation: 2, borderRadius: 15, padding: 20, backgroundColor: Colors.background, marginTop: 10 }}
      >
        <Ionicons size={22} name='create-outline' color={Colors.textDark} />
        <Text style={{ fontSize: 16 }}>Edit Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 10, elevation: 2, borderRadius: 15, padding: 20, backgroundColor: Colors.background, marginTop: 10 }}
      >
        <Ionicons size={22} name='log-out-outline' color={Colors.textDark} />
        <Text style={{ fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
