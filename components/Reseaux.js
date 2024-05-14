import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const api = "http://192.168.1.14:8000/api/reseauxes";

const RS = () => {
    const [reseaux, setReseaux] = useState([]);

    useEffect(() => {
        axios.get(api, { headers: { accept: 'application/ld+json' } })
            .then(response => {
                if (response.data && response.data["hydra:member"]) {
                    setReseaux(response.data["hydra:member"]);
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={style.container}>
                    {reseaux.map((res, index) => (
                        <Text key={index} style={style.title}>
                            {res.nom}
                        </Text>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RS;

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        marginVertical: 20,
        marginHorizontal: 100,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
});
