import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import Chips from './Chips';
import ActionButtons from './ActionButtons';
import LoginData from './LoginData';
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
                    left: 70,
                    right: 70
                }}
            >
            <View 
                style={{
                    ...styles.container,
                    backgroundColor: 'white',
                    elevation: 20,
                    borderColor: colors.password_category[this.props.item.category].dark
                }}
            >
                <View style={styles.body}>           
                    <LoginData 
                        item={this.props.item}
                        passwordVisible={this.state.showPassword}
                    />
                    <ActionButtons 
                        item={this.props.item}
                        showPassword={this.state.showPassword}
                        toggleShowPassword={this.toggleShowPassword}
                    />
                </View>
                {/* <Chips item={this.props.item} /> */}
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
        height: '100%',
        borderLeftWidth: 5
    },
    swipeItem: {
        margin: 10,
        marginHorizontal: 20,
        height: 100
    },
    body: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
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