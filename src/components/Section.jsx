import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

const Section =({ title, DataComponent, data }) => {
    return (
      <View style={styles.container}>
        {title && <Text style={styles.sectionTitle}>{title}</Text>}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map(item => <DataComponent {...item} />)}
        </ScrollView>
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical: 15,
    },
    sectionTitle: {
        marginBottom: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 25, 
        letterSpacing: 1
    }
})


export default Section