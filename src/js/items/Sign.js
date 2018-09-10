class Sign extends Item {

  constructor (props) {
    super(props)
    this.text = props.text.split('|')
  }

  interact () {
    showText(this.text)
  }
}
