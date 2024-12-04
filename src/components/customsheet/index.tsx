// import {
//     View,
//     Text,
//     SafeAreaView,
//     Image,
//     TouchableOpacity,
//     Dimensions,
//     ScrollView,
//   } from 'react-native';
//   import React, {useEffect, useRef} from 'react';
//   import {Icons, Images} from '../../assets';
//   import styles from './style';
//   import RBSheet from 'react-native-raw-bottom-sheet';
  
//   interface BottomSheetProps {
//     visible: boolean;
//     onClose: () => void;
//     navigation: {
//       navigate: (screen: string) => void;
//     };
//   }


//   const CustomSheetScreen = ({visible, onClose,  navigation,}:BottomSheetProps) => {
//     const refRBSheet = useRef<RBSheet>(null);
  
//     useEffect(() => {
//       if (visible) {
//         refRBSheet.current?.open();
//       } else {
//         refRBSheet.current?.close();
//       }
//     }, [visible]);
  
//     return (
//       <RBSheet
//         ref={refRBSheet}
//         closeOnPressMask
//         useNativeDriver={false}
//         height={Dimensions.get('window').height / 1.5}
//         style={{overflow: 'hidden'}}
//         customStyles={{
//           wrapper: {
//             backgroundColor: 'rgba(0,0,0,0.5)',
//           },
//           container: {
//             borderRadius: 20,
//           },
//         }}
//         onClose={onClose}>
//       </RBSheet>
  
//     );
//   };
  
//   export default CustomSheetScreen;
  