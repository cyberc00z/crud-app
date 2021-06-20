import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { Button, DarkTheme } from "react-native-paper";
import Modal from "react-native-modal";

import Styles from "../../utils/styles";

const BottomModal = ({isOpen, closeModal, options}) => {
    return(
    <Modal
      testID={'modal'}
      isVisible={isOpen}
      onSwipeComplete={closeModal} 
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      swipeDirection={['down']}
      style={styles.view}
    >
        <View style={styles.content}>
                {options.map((item) => {
                const {text, onPress} = item;
          return (
            <Button
              key={text}
              mode="text"
              labelStyle={styles.contentOptions}
              onPress={onPress}>
              {text}
            </Button>
          );
        })}
        <Button
          key="cancel"
          mode="text"
          color={DarkTheme.colors.error}
          labelStyle={styles.contentOptions}
          onPress={closeModal}>
          Cancel
        </Button>
      </View>  
    </Modal>

    )
}

export default BottomModal;

const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      content: {
        backgroundColor: DarkTheme.colors.background,
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      contentTitle: {
        ...Styles.fontLarge,
        marginBottom: 12,
        color: 'white',
      },
      contentOptions: {
        ...Styles.fontMedium,
        marginVertical: 8,
      },
})


