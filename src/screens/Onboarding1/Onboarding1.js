import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomBox from "../../components/CustomBox/CustomBox";
import CustomProfile from "../../components/CustomProfile/CustomProfile";

const Onboarding1 = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Lab Bioinfomatics</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Ung Thu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.introduceText}>
            MỘT CÔNG CỤ HỖ TRỢ CHẨN ĐOÁN VÀ ĐIỀU TRỊ UNG THƯ
          </Text>
        </View>
        <View>
          <Text style={styles.detailText}>
            Chẩn đoán dựa trên giải trình tự thế hệ tiếp theo (NGS) cho phép bác
            sĩ lâm sàng xác định giả lập các sự kiện gây ra bởi các tác nhân cụ
            thể trong các khối u riêng lẻ. Việc xác định đúng các tác nhân gây
            bệnh có thể cho phép bác sĩ lâm sàng dự đoán tốt hơn các phản ứng
            điều trị và cải thiện đáng kể việc chăm sóc bệnh nhân{" "}
            <TouchableOpacity>
              <Text style={styles.findingMoreText}>Tìm hiểu thêm</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={styles.detailView}>
          <View style={styles.detailBox}>
            <View style={styles.boxView}>
              <Text style={styles.detailNumber}>1066</Text>
            </View>
            <Text>Gen</Text>
          </View>
          <View style={styles.detailBox}>
            <View style={styles.boxView}>
              <Text style={styles.detailNumber}>133</Text>
            </View>
            <Text>Bệnh Ung Thư</Text>
          </View>
          <View style={styles.detailBox}>
            <View style={styles.boxView}>
              <Text style={styles.detailNumber}>112</Text>
            </View>
            <Text>Loại Thuốc</Text>
          </View>
        </View>
        <View style={styles.btnBox}>
          <View>
            <CustomBox
              iconSource={require("../../assets/icons/icon_search.png")}
              headerText="Tìm kiếm"
              text="Tìm kiếm, tra cứu các thông tin về thuốc, các loại bệnh ung thư, gen và đột biến liên quan"
            />
            <CustomBox
              iconSource={require("../../assets/icons/icon_database.png")}
              headerText="Lưu trữ"
              text="Lưu trữ kết quả xét nghiệm của bệnh nhân"
            />
          </View>
          <View>
            <CustomBox
              iconSource={require("../../assets/icons/icon_eye_on.png")}
              headerText="Trình bày"
              text="Trình bày và hiển thị kết quả xét nghiệm dưới dạng bảng"
            />
            <CustomBox
              iconSource={require("../../assets/icons/icon_health.png")}
              headerText="Hỗ trợ điều trị"
              text="Hỗ trợ bác sỹ tạo đơn thuốc với bộ dữ liệu đã được kiểm chứng"
            />
          </View>
        </View>
        <View style={styles.profileView}>
          <View>
            <Text style={styles.contactText}>Contact</Text>
          </View>
          <TouchableOpacity>
            <CustomProfile
              imageSource={require("../../assets/images/image_teacherQuang.png")}
              infoText="T.S Nguyen Hong Quang"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    color: "white",
  },
  container: {
    backgroundColor: "#0066FF",
    height: 100,
    justifyContent: "center",
  },
  introduceText: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 10,
    color: "#003366",
  },
  detailText: {
    margin: 10,
    fontSize: 18,
  },
  findingMoreText: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
  },
  detailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  boxView: {
    borderBottomWidth: 1,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  detailBox: {
    height: 60,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  detailNumber: {
    fontWeight: "bold",
    color: "003366",
    fontSize: 25,
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  profileView: {
    padding: 10,
    justifyContent: "space-between",
  },
  contactText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
