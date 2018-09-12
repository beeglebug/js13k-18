class Note extends Item {

  constructor (props) {
    super(props)
    this.solid = true
    this.text = props.text.split('\n\n')
  }

  interact () {
    showText(this.text)
  }
}
