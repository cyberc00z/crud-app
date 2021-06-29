import React from "react";
import { Alert } from "react-native";
import BottomModal from "../components/BottomModal";

import {onShare, onDelete} from "../utils/Handlers/PostHandlers";

const dotOptions = ({isOpen, closeModal,goBack, post }) => {
    return (
        <BottomModal
           isOpen={isOpen}
           closeModal={()=> closeModal()}
           options={[
               {
                   text:"Delete",
                   onPress: () => {
                       closeModal();
                       onDelete(post, goBack);
                   },
               },
               {
                   text: 'Share',
                   onPress: () => {
                       onShare(post.split('.')[0], (message) => {
                           Alert.alert('Error', message,[{text: 'ok'}], {
                               cancelable: true,
                           });
                       });
                       closeModal();
                   }
               }
           ]}
        
        
        />
    );
};

dotOptions.defaultProps = {
    isOpen: false,
    closeModal: () => {},
    goBack: () => {},
    post:"",
};
export default dotOptions;