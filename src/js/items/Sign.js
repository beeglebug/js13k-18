class Sign extends Item {

  constructor (props) {
    super(props)
    this.solid = true
    this.text = props.text.split('|')
  }

  interact () {
    showText(this.text)
  }
}
