import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { FlatList, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "cash",
    "unit": "PCX160 ABS PLUS",
    "customer": "RAHANTO",
    "customer_alamat": "SUNGAPAN, RT 001/002 SUNGAPAN, PEMALANG, KABUPATEN PEMALANG",
    "customer_phone": "87733103001"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "BEAT SPORTY CBS SPION AND SCREEN PLUS",
    "customer": "SUKIRMAN",
    "customer_alamat": "WARUREJA, RT 002/003 WARUREJA, WARUREJA, KABUPATEN TEGAL",
    "customer_phone": "81215482605"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "PCX160 CBS PLUS",
    "customer": "KELVIN FAUZI",
    "customer_alamat": "KUTA, RT 002/005 KUTA, BANTARBOLANG, KABUPATEN PEMALANG",
    "customer_phone": "81325966852"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "cash",
    "unit": "SCOOPY PRESTIGE STEP FLOOR PLUS",
    "customer": "SISCA ARDILLA",
    "customer_alamat": "RANDUDONGKAL, RT 003/001 RANDUDONGKAL, RANDUDONGKAL, KABUPATEN PEMALANG",
    "customer_phone": "85727955043"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "BeAT Street",
    "customer": "RATNA LAELI PUSPITASARI",
    "customer_alamat": "LINGKUNGAN BEJI TENGAH, RT 002/006 BEJI, TAMAN, KABUPATEN PEMALANG",
    "customer_phone": "85228159494"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "cash",
    "unit": "BeAT Street",
    "customer": "MUH MABRURI",
    "customer_alamat": "DK KERAJAN, RT 006/002 LONGKEYANG, BODEH, KABUPATEN PEMALANG",
    "customer_phone": "82329150829"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "SCOOPY PRESTIGE STEP FLOOR PLUS",
    "customer": "SILVI ADELIA",
    "customer_alamat": "DUSUN KEBOJONGAN, RT 005/002 KEBOJONGAN, COMAL, KABUPATEN PEMALANG",
    "customer_phone": "85747104915"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "BeAT Street",
    "customer": "SABILYA NANJUNG AYUNDA",
    "customer_alamat": "JL TERI, RT 003/001 WIDURI, PEMALANG, KABUPATEN PEMALANG",
    "customer_phone": "8.82003E+11"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "BEAT SPORTY CBS SPION AND SCREEN PLUS",
    "customer": "AINA AYU RAHMA NURFADILAH",
    "customer_alamat": "DUSUN RANDUSARI, RT 008/004 KALIRANDU, PETARUKAN, KABUPATEN PEMALANG",
    "customer_phone": "82243120617"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "PCX160 ABS PLUS",
    "customer": "SITI MUTMAINAH",
    "customer_alamat": "KEBAGUSAN, RT 024/004 KEBAGUSAN, AMPELGADING, KABUPATEN PEMALANG",
    "customer_phone": "8.95613E+11"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "cash",
    "unit": "BEAT SPORTY CBS ISS DELUXE SPION AND SCREEN PLUS",
    "customer": "ADI SOLEMAN",
    "customer_alamat": "SUGIWARAS, RT 001/008 SUGIHWARAS, PEMALANG, KABUPATEN PEMALANG",
    "customer_phone": "87810022666"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "BeAT Street",
    "customer": "TOLANI",
    "customer_alamat": "KEPETEK, RT 002/003 GENDOWANG, MOGA, KABUPATEN PEMALANG",
    "customer_phone": "83831680957"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "BeAT Street",
    "customer": "ICHA DWI RAHMAWATI",
    "customer_alamat": "JL PANDAK, RT 002/008 WANAREJAN SELATAN, TAMAN, KABUPATEN PEMALANG",
    "customer_phone": "82221228991"
  },
  {
    "date": "2024-11-01T00:00:00.000Z",
    "category": "credit",
    "unit": "PCX160 CBS PLUS",
    "customer": "MOHAMMAD IKMALUDIN ABDUL FATAH",
    "customer_alamat": "JL PUCUK BARATA BANYUMUDAL, RT 008/006 BANYUMUDAL, MOGA, KABUPATEN PEMALANG",
    "customer_phone": "85290929085"
  }
]

export default function CustomerDatabase() {
  return (
    <>
      <Stack.Screen options={{ title: 'Database Konsumen', statusBarColor: Colors.tint }} />
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={(({ item }) => (
            <View style={{
              flex: 1, flexDirection: "row",
              backgroundColor: Colors.background,
              marginBottom: 5,
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              elevation: 1
            }}>
              <View style={{ borderEndWidth: 2, paddingEnd: 5, borderColor: Colors.tint }}>
                <Text style={{ fontSize: 12, color: Colors.textSecondary }}>
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </Text>
                <Text style={{ color: Colors.notification }}>
                  {item.category.toUpperCase()}
                </Text>
              </View>
              <View style={{ padding: 5, width: "70%" }}>
                <Text>
                  {item.customer}
                </Text>
                <Text style={{ color: Colors.textSecondary, fontSize: 9 }}>
                  {item.customer_alamat}
                </Text>
                <Text style={{ color: Colors.textSecondary, fontSize: 11 }}>
                  {item.unit}
                </Text>
                <Text style={{ color: Colors.textSecondary, fontSize: 12 }}>
                  {"0" + item.customer_phone}
                </Text>
              </View>
              <TouchableOpacity onPress={() => {
                Linking.openURL(`whatsapp://send?text=&phone=62${item.customer_phone}`)
              }}>
                <Ionicons size={28} name='logo-whatsapp' color={"#10e826"} />
              </TouchableOpacity>
            </View>
          ))}
        />
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
