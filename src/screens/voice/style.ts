import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    voiceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    recognizedText: {
        fontSize: 18,
        marginTop: 20,
        color: '#333',
    },
});
