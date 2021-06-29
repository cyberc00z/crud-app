import { Share, ToastAndroid, Alert } from "react-native";
import {db} from "../firebase";

export const onShare = () => {
    Share.share({
        title:"Spancer Post",
        message:"Post Link:- {link}"
    }).catch((err) => {
        console.log('Error at onShare: ', err.message);
        setError(err.message);
    });
};

export const onDelete = ( post , goBack) => {
    Alert.alert('Delete Post', 'Are you sure you want to delete this post?',[
        {text: 'Cancel', onPress:() => {}},
        {
            text:"Delete",
            onPress: () => {
                goBack();
                db.collection("posts").doc(post.id).delete()
                .then(() => {
                    ToastAndroid.showWithGravity(
                        'Post Deleted Successfully',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                })
                .catch((error) => {
                    JSON.stringify(error);
                    console.log(error);
                    Alert.alert(error.message);
                    goBack();
                })
            }
        }
    ])
}

