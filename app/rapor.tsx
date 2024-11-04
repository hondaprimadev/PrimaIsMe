import { Colors } from '@/constants/Colors';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SalesArea() {
  return (
    <>
      <Stack.Screen options={{ title: 'Rapor', statusBarColor: Colors.tint }} />
      <View style={styles.container}>
        <Text>Coba</Text>
        <Link href="/" style={styles.link}>
          <Text >Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
