import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors'
import Chips from './Chips';
import ActionButtons from './ActionButtons';
import OnlyLoginBody from './OnlyLoginBody';
import LoginAndPasswordBody from './LoginAndPasswordBody';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import SwipeButtons from './SwipeButtons';

type Props = {
    item: any
}

class PasswordItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        showPassword: false,
    }
    toggleShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    buttons = (
        <SwipeButtonsContainer style={styles.swipeButtonContainer}>
            <SwipeButtons item={this.props.item} />
        </SwipeButtonsContainer>
    )
    //TODO: Create two different components, one to show informations when the password is not set to be showed and another to show the password, and put booth inside the container View, which will have all the styling except by the padding
    render() {
        return (
            <SwipeItem 
                rightButtons={this.buttons}
                style={styles.swipeItem}
                disableSwipeIfNoButton
                // disableButtonScale={{
                //     right: true
                // }}
                swipeThreshold={{
                    left: 30,
                    right: 30
                }}
            >
            <View 
                style={{
                    ...styles.container,
                    backgroundColor: colors.password_category[this.props.item.category].light
                }}
            >
                <Chips item={this.props.item} />
                <View style={styles.body}>
                    
                    {!this.state.showPassword && <OnlyLoginBody item={this.props.item} />}
                    
                    {this.state.showPassword && <LoginAndPasswordBody item={this.props.item} />}

                    <ActionButtons 
                        item={this.props.item}
                        showPassword={this.state.showPassword}
                        toggleShowPassword={this.toggleShowPassword}
                    />
                </View>
            </View>
            </SwipeItem>
          )
    }
}

export default PasswordItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        height: '100%'
    },
    swipeItem: {
        margin: 10,
        height: 110
    },
    body: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    swipeButtonContainer: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginRight: 5,
        width: 200,
    }
})