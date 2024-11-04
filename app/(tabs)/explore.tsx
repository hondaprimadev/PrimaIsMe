import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native';

export default function TabTwoScreen() {
  const [isNotification, setIsNotification] = useState(false)
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 20 }}>
        <TouchableOpacity
          onPress={() => setIsNotification(false)}
          style={{
            borderRadius: 25,
            backgroundColor: !isNotification ? Colors.tint : Colors.background,
            padding: 10,
            borderWidth: 2,
            borderColor: Colors.tint,
            width: 115,
            alignItems: "center"
          }}>
          <Text style={{ color: !isNotification ? Colors.textLight : Colors.textDark, }}>Pengumuman</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsNotification(true)}
          style={{
            borderRadius: 25,
            backgroundColor: isNotification ? Colors.tint : Colors.background,
            padding: 10,
            borderWidth: 2,
            borderColor: Colors.tint,
            width: 115,
            alignItems: "center"
          }}>
          <Text style={{ color: isNotification ? Colors.textLight : Colors.textDark, }}>Notifikasi</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView
        style={{
          borderRadius: 10,
          backgroundColor: Colors.background,
          padding: 10,
          borderWidth: 2,
          borderColor: Colors.tint,
          width: "100%",
          height: "70%",
        }}
      >
        {
          isNotification ? (<Text>Belum ada notifikasi,</Text>) : (
            <FlatList
              data={[
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: false,
                  title: "Jadwal Meeting November",
                  summery: "Beserta dengan adanya program baru maka salesman wajib ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
                {
                  image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
                  isRead: true,
                  title: "Judul sudah di baca",
                  summery: "Contoh yang sudah dibaca ......",
                  from: "",
                  content: "",
                  to: ""
                },
              ]}
              renderItem={(item => (
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <Image
                    source={{ uri: item.item.image }}
                    style={{ height: 45, width: 45, borderRadius: 50, marginEnd: 10 }}
                  />
                  <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start" }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: !item.item.isRead ? Colors.textDark : Colors.textSecondary }}>{item.item.title}</Text>
                    <Text style={{ fontSize: 12, color: !item.item.isRead ? Colors.textDark : Colors.textSecondary }}>{item.item.summery}</Text>
                  </View>
                  <Ionicons size={28} name={item.item.isRead ? 'mail-open-outline' : 'mail-unread-outline'} color={!item.item.isRead ? Colors.tint : Colors.textDark} />
                </TouchableOpacity>
              ))}
            />)
        }

      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
