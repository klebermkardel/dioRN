import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitfub = '#C9D1D9';
const colorDarkFontGitfub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/79705912?v=4';

const urlToMyGithub = 'https://github.com/klebermkardel';

const App = () => {

    const handlePressGoToGithub = async ()=>{
       const res = await Linking.canOpenURL(urlToMyGithub);
       if(res){
         await Linking.openURL(urlToMyGithub)
       }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
            <View style={style.content}>
                <Image acessibilityLabel="Kleber com camisa bege e óculos" style={style.avatar} source={{uri: imageProfileGithub}}/>
                <Text acessibilityLabel="Nome: Kleber Molina Kardel" style={[style.defaultText, style.name]}>Kleber Molina Kardel</Text>
                <Text acessibilityLabel="Nickname: klebermkardel" style={[style.defaultText, style.nickname]}>klebermkardel</Text>
                <Text acessibilityLabel="Descrição: 26 anos - Ciência da Computação 3ª período Desenvolvedor Web/Front End" style={[style.defaultText, style.description]}>26 anos - Ciência da Computação 3ª período Desenvolvedor Web/Front End</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>   
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGitHub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGitfub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color: colorDarkFontGitfub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGitfub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});