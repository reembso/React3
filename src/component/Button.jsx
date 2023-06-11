export default function Button(props) {
    const {style,text} = props
  return (
    <div>
      <button  style = {style} >
      {text }
        </button>
    </div>
  )
}
