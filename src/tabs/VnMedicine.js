import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ActivityIndicator, Button, Card, MD2Colors } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
const renderItem = ({ item }) =>
(<Card styles={{marginBottom:10}}>
  <Card.Content>
    <Text variant="bodyMedium">Tên thuốc : {item.medicine_name}</Text>
    <Text variant="bodyMedium">Liều lượng : {item.content}</Text>
    <Text variant="bodyMedium">Dạng bào chế : {item.dosage_form}</Text>
    <Text variant="bodyMedium">Đóng gói : {item.packing}</Text>
    <Text variant="bodyMedium">Công ty đăng ký sản xuất : {item.company_name}</Text>
    <Text variant="bodyMedium">Giấy phép lưu hành : {item.irculation_permit}</Text>
    <Text variant="bodyMedium">Hoạt chất : {item.component}</Text>
    <Text variant="bodyMedium">Điều trị : {item.cure}</Text>
    <Text variant="bodyMedium">Gene : {item.gene}</Text>
  </Card.Content>
</Card>)
const VnMedicine = () => {
  // state
  const [VnMedicine, setVnMedicine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // get vn medicine
  const getVnMedicine = async () => {
    let rs = await axios.get("https://ut-project-be.vercel.app/api/all-vn-medicine");
    console.log(rs.data);
    setVnMedicine(rs.data.data);
    setIsLoading(false);
  }
  if (isLoading) {
    getVnMedicine();
  }
  useEffect(() => {
    getVnMedicine();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator animating={true} color={MD2Colors.red800} /> : <FlatList
        data={VnMedicine}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />}
    </SafeAreaView>
  )
}

export default VnMedicine

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})