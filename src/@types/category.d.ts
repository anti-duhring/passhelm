type TCategoryChip = {
    backgroundColor: string,
    dismissColor: string,
    labelStyle: TLabelStyle,
    containerStyle: TContainerStyle,
    onPress: () => void
} & TCategory

type TLabelStyle = {
    color: string
}
type TContainerStyle = {
    borderColor: string
}