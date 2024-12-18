import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import {
  StripeProvider,
  useStripe,
  CardField,
} from '@stripe/stripe-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '../../assets';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import strings from '../../theme/string';


interface PaymentIntentResponse {
  clientSecret: string;
}

const PaymentScreen= ({ navigation }: { navigation: any }) => {
  const stripe = useStripe();
  const [paymentResult, setPaymentResult] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: 50000,
            currency: 'usd',
          }),
        },
      );

      const { clientSecret } = await response.json();
      console.log(clientSecret, '>>>> client secret received');
      setClientSecret(clientSecret);
    } catch (error: any) {
      setPaymentResult(`Error fetching client secret: ${error.message}`);
    }
  };

  const handlePayment = async () => {
    if (!clientSecret) {
      setPaymentResult('Waiting for payment intent...');
      return;
    }

    if (!cardDetails?.complete) {
      setPaymentResult('Card details are incomplete');
      return;
    }

    setIsProcessing(true);
    setModalMessage('Processing payment...');

    try {
      const { paymentIntent, error } = await stripe.confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      });

      setIsProcessing(false);
      setModalMessage(''); 

      if (error) {
        setPaymentResult(`Payment failed: ${error.message}`);
        setModalMessage('Payment failed, please try again.');
      } else if (paymentIntent) {
        setPaymentResult(`Payment successful! Intent ID: ${paymentIntent.id}`);
        setModalMessage('Payment successful!');
      }
      setModalVisible(true);
    } catch (error: any) {
      setIsProcessing(false);
      setPaymentResult(`Error: ${error.message}`);
    }
  };

  const handleModalOk = () => {
    setModalVisible(false); 
    navigation.navigate('BottomTab'); 
  };

  return (
    <StripeProvider publishableKey="pk_test_51QVS3b1lHcmCvGyo63ZkoUhXddG0tvhMc5kH3EEjnuRF8f1gAjSNQs6yjYzejMkOs8kraKs3Kc97UPKgdte1amVl00rJgYMHtR">
       
      <SafeAreaView style={styles.container}>
       
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.navigate('YouTubePremium')}
      >
        <Image source={Icons.backIcons} style={styles.backImage} />
      </TouchableOpacity>

      <Image
          source={Images.paymentBg1} 
          style={styles.imageBelowBackArrow}
        />

       <View style={styles.container1}>
      
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{strings.EnterCardDetails}</Text>

            <CardField
              postalCodeEnabled={true}
              placeholders={{
                number: '4242 4242 4242 4242', 
              }}
              onCardChange={cardDetails => setCardDetails(cardDetails)}
              style={styles.cardField}
            />

            
            <TouchableOpacity
              style={styles.button}
              onPress={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>{strings.Pay}</Text>
              )}
            </TouchableOpacity>

          
            {paymentResult && (
              <Text style={styles.resultText}>{paymentResult}</Text>
            )}

            
            <Modal
              transparent={true}
              animationType="fade"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>{modalMessage}</Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={handleModalOk} 
                  >
                    <Text style={styles.modalButtonText}>{strings.OK}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          </View>
      </SafeAreaView>
    </StripeProvider>
  );
};

export default PaymentScreen;
