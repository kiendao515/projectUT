import { FlatList, Linking, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Card, List, MD2Colors } from 'react-native-paper';
const renderItem = ({ item }) =>
(<Card mode='contained'>
  <Card.Cover source={{ uri: item.link_image }} style={{}}/>
  <Card.Content>
    <Text variant="bodyMedium">Tên thuốc : {item.medicine_name}</Text>
    <Text variant="bodyMedium">Loai ung thư : {item.type}</Text>
    <Text variant="bodyMedium" onPress={()=>{
      Linking.openURL(item.link_evidence)
    }}>Dẫn chứng : {item.link_evidence}</Text>
    <List.AccordionGroup>
    <List.Accordion title="Dẫn chứng" id="1">
      <List.Item title= "Dẫn chứng tiếng anh" description={item.text_evidence_us} descriptionNumberOfLines={30}/>
      <List.Item title= "Dẫn chứng( Đã được dịch )" description={item.text_evidence_vn} descriptionNumberOfLines={30}/>
    </List.Accordion>
  </List.AccordionGroup>
  </Card.Content>
</Card>)
const FdaMedicine = () => {
  const [FdaMedicine, setFdaMedicine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // get vn medicine
  const getFdaMedicine = async () => {
    let rs = await axios.get("https://ut-project-be.vercel.app/api/fda-medicine");
    console.log(rs.data);
    setFdaMedicine(rs.data.data);
    setIsLoading(false);
  }
  if (isLoading) {
    getFdaMedicine();
  }
  useEffect(() => {
    getFdaMedicine();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator animating={true} color={MD2Colors.red800} /> : <FlatList
        data={FdaMedicine}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={{padding:10}}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />}
    </SafeAreaView>
  )
}

export default FdaMedicine

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || -40,
    justifyContent: 'space-between'
  }
})