import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function AboutScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1 }}>

         
            <Image
                source={{ uri: "https://i.pinimg.com/736x/4a/f1/dc/4af1dccd49d1c2b0f0d4d6078e7f4e56.jpg" }}
                style={styles.topLogo}
            />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>

                    <Text style={styles.title}>Sobre o App</Text>

                 
                    <View style={styles.card}>

                       
                        <Image
                            source={require("../../assets/laco.png")} 
                            style={styles.cardImage}
                        />

                        <Text style={styles.description}>
                            Nosso aplicativo de controle financeiro foi criado com o objetivo de simplificar a forma como as pessoas organizam e acompanham sua vida financeira no dia a dia. A proposta é oferecer uma ferramenta prática e acessível, capaz de ajudar no registro de receitas, controle de despesas e definição de metas, permitindo que o usuário tenha uma visão clara e organizada de sua situação financeira.
                            {"\n\n"}

                            Ao utilizar o aplicativo, o usuário consegue identificar padrões de consumo, evitar gastos desnecessários e planejar melhor o uso do seu dinheiro. A organização das informações em uma interface simples e intuitiva contribui para uma experiência fluida, tornando o processo de controle financeiro menos complexo e mais eficiente. Dessa forma, o aplicativo não apenas auxilia no gerenciamento financeiro, mas também incentiva a criação de hábitos mais conscientes e sustentáveis.
                            {"\n\n"}

                            Além de sua funcionalidade, o desenvolvimento do aplicativo foi pensado para garantir desempenho, praticidade e compatibilidade com diferentes dispositivos. A aplicação foi construída utilizando tecnologias modernas, como o React Native, o que permite sua execução em múltiplas plataformas com uma única base de código. Essa abordagem facilita a manutenção, otimiza o tempo de desenvolvimento e proporciona uma experiência consistente para os usuários.
                            {"\n\n"}

                            Durante o processo de desenvolvimento, foram priorizados aspectos como usabilidade, organização de componentes e clareza na interface, garantindo que mesmo usuários com pouca familiaridade com tecnologia consigam utilizar o aplicativo com facilidade. Cada funcionalidade foi planejada para ser objetiva e eficiente, mantendo o foco na simplicidade sem abrir mão da qualidade.
                        </Text>

                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 80,
        backgroundColor: "#f9f9f9"
    },

    content: {
        width: "100%",
        maxWidth: 600
    },

    topLogo: {
        position: "absolute",
        top: 20,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: 12,
        resizeMode: "cover",
        zIndex: 10,
        overflow: "hidden"
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 25,
        textAlign: "center",
        color: "#333"
    },

    card: {
        backgroundColor: "#fdddf5f1",
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,

        paddingTop: 50,

        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    cardImage: {
        width: 70,
        height: 70,
        position: "absolute",
        top: -35,
        left: "50%",
        transform: [{ translateX: -35 }],
        resizeMode: "contain",
    },

    description: {
        fontSize: 17,
        fontFamily: "Arial",
        lineHeight: 26,
        textAlign: "justify",
        color: "#333"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    }
});