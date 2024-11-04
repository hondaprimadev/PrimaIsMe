import { Colors } from '@/constants/Colors';
import { Link, Stack } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function SalesArea() {
  return (
    <>
      <Stack.Screen options={{ title: 'Penjualan Per Kecamatan', statusBarColor: Colors.tint }} />
      <View style={styles.container}>
        <View style={{ backgroundColor: Colors.background, padding: 10, elevation: 5, borderRadius: 10, marginBottom: 20 }}>
          <Text style={{ marginBottom: 10 }}>PETA KENDAL</Text>
          <Image
            source={{ uri: "https://ik.imagekit.io/mf1j3kikz/Screenshot%202024-11-02%20025134.png?updatedAt=1730490756404" }}
            style={{ height: 200, width: "auto", borderRadius: 10 }}
          />
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: Colors.background, elevation: 2, borderRadius: 10, padding: 10 }}>
          <Text style={{ marginBottom: 10 }}>DATA PENJUALAN</Text>
          <View style={{ paddingBottom: 30 }}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#cf5f57' }}>
              <Row data={['KECAMATAN', 'SLM', 'DEALER', '%']} flexArr={[2, 1, 1, 1]} style={{ height: 40, backgroundColor: '#e3958f', }}
                textStyle={{ textAlign: "center", margin: 6 }} />
              <Rows data={[
                ['Brangsong', '0', '0', '0'],
                ['Boja', '0', '0', '0'],
                ['Cepiring', '0', '0', '0'],
                ['Gemuh', '0', '0', '0'],
                ['Kaliwungu', '0', '0', '0'],
                ['Kaliwungu Selatan', '0', '0', '0'],
                ['Kangkung', '0', '0', '0'],
                ['Kendal', '0', '0', '0'],
                ['Limbangan', '0', '0', '0'],
                ['Ngampel', '0', '0', '0'],
                ['Plantungan', '0', '0', '0'],
                ['Pageruyung', '0', '0', '0'],
                ['Patean', '0', '0', '0'],
                ['Patebon', '0', '0', '0'],
                ['Pegandon', '0', '0', '0'],
                ['Ringinarum', '0', '0', '0'],
                ['Rowosari', '0', '0', '0'],
                ['Singorojo', '0', '0', '0'],
                ['Sukorejo', '0', '0', '0'],
                ['Weleri', '0', '0', '0'],
              ]}
                flexArr={[2, 1, 1, 1]} textStyle={[{ margin: 6, textAlign: "center" }]} />
            </Table>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
