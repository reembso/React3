export default function Button(props) {
    const {color,onClick} = props
  return (
    <div>
      <button  style = {{backgroundColor:color}} 
      onClick={onClick} >
      {color} 
        </button>
    </div>
  )
}
