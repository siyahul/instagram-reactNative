import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import Story from "../Story";
import { styles } from "./styles";

const Stories = () => {
  const [datas, setDatas] = useState([
    {
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADGmqu-9wix3NQN3NcKYdi6ZmI172D8umkxAoukmGwOGkg=s83-c-mo",
      name: "Siyahul Haq",
    },
    {
      photoUrl:
        "https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/106200806_3286631041562864_7211332526102451791_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=uffTCs-p49EAX92JRrS&_nc_ht=scontent-maa2-2.xx&oh=7ed73cfc9273b76232ef2d9c3bcd5297&oe=5FC2FABA",
      name: "Azhar",
    },
    {
      photoUrl:
        "https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/91348522_2845638775554959_5828221572145479680_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=jAbXAspXuacAX8axma1&_nc_ht=scontent-maa2-1.xx&oh=ff7332cdb2f611cdabc5356e6c81744a&oe=5FC3BAC6",
      name: "Ramees BadOx",
    },
    {
      photoUrl:
        "https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/120845232_2708616899399649_6906345641510493882_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=K21RhomgflQAX-57FTm&_nc_ht=scontent-maa2-1.xx&oh=86adfe0ecb072a75ab281177340a633f&oe=5FC41D17",
      name: "Adhiiiii",
    },
    {
      photoUrl:
        "https://scontent-maa2-1.xx.fbcdn.net/v/t31.0-8/15289248_269068140162594_1580546814749307408_o.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=1Ja1imUYk5QAX8M9EBk&_nc_ht=scontent-maa2-1.xx&oh=24b024a7e804ec20c61406fb920de41b&oe=5FC2E455",
      name: "Quasi",
    },
    {
      photoUrl:
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/75407813_3091412370977438_3580795328308598472_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=_6vnygglRq4AX9Q37rW&_nc_ht=scontent.fmaa1-1.fna&oh=a3143c1b84d4bcfd85ba16c01bc3007f&oe=5FC2A856",
      name: "Haq",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        keyExtractor={({ name }) => name}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Story name={item.name} url={item.photoUrl} />
        )}
      />
    </View>
  );
};

export default Stories;
