import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageContainer from '../../components/PageContainer'
import Avatar from './Avatar'

type Props = {}

const Profile = (props: Props) => {
  return (
    <PageContainer>
        <Avatar />
        <Text>Profile</Text>
    </PageContainer>
  )
}

export default Profile

const styles = StyleSheet.create({})