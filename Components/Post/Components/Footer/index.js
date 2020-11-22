import {
  faComment,
  faHeart as faHeartfls,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "./style";

const Footer = ({ post,handleLike }) => {
  const likes = String(post?.image?.likesCount);
  const handleLikes = ()=>{
    handleLike(post.id,!post.image.liked,);
  }
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <View style={styles.socialIcons}>
          <View style={styles.socialIcon}>
            <TouchableWithoutFeedback onPress={handleLikes}>
              <FontAwesomeIcon
                icon={post?.image?.liked ? faHeart : faHeartfls}
                color={post?.image?.liked ? "red" : "black"}
                size={24}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.socialIcon}>
            <FontAwesomeIcon icon={faComment} size={24} />
          </View>
          <View style={styles.socialIcon}>
            <FontAwesomeIcon icon={faPaperPlane} size={24} />
          </View>
        </View>
        <View style={styles.saveIcon}>
          <FontAwesomeIcon icon={faBookmark} size={24} color={"gray"} />
        </View>
      </View>

      <Text style={styles.likes}>{likes} Likes</Text>
      <View style={styles.caption}>
        <Text style={styles.captionUser}>{post?.user?.name + " "}</Text>
        <Text>{post?.image?.caption}</Text>
      </View>
      <Text style={styles.time}>{post?.image?.postedAt}</Text>
    </View>
  );
};

export default Footer;
