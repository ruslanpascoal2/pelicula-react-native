import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Button, Label } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DiscoverButton({focused, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
           <Button
            colors={['#F2645A', '#9A557A']}
            start={[1, 0.2]}>
                <MaterialCommunityIcons name="movie-open" size={24} color={focused ? '#fff' : '#000'} />
            <Label focused={focused}>Discover</Label>
            </Button>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({})
