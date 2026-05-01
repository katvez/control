import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1 }}>
          
            <Image
                source={{ uri: "https://i.pinimg.com/736x/4a/f1/dc/4af1dccd49d1c2b0f0d4d6078e7f4e56.jpg" }}
                style={styles.topLogo}
            />

            <View style={styles.container}>
                <View style={styles.center}>

                    <Text style={styles.title}>Control</Text>

                    <TextInput
                        placeholder="E-mail"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Senha"
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cadastro")}
                    >
                        <Text style={styles.link}>
                            Não tem uma conta? Criar conta
                        </Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={styles.aboutButton}
                    onPress={() => navigation.navigate("Sobre")}
                >
                    <Text style={styles.aboutText}>Sobre o aplicativo</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        paddingTop: 80 
    },

    center: {
        flex: 1,
        justifyContent: "center"
    },

    topLogo: {
        position: "absolute",
        top: 20,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: 12,
        resizeMode: "cover",
        zIndex: 10
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center"
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15
    },

    button: {
        backgroundColor: "#ec9ce2ff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },

    link: {
        marginTop: 15,
        textAlign: "center",
        color: "#ec9ce2ff",
    },

    aboutButton: {
        alignItems: "center",
        marginBottom: 20,
    },

    aboutText: {
        color: "#999",
        fontSize: 14,
    },
});