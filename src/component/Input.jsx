export default function Input(props)
{
    const { type, placeholder } = props;
 {
  return (
    <div>
      <input
      type = {type}
      placeholder={placeholder} />
    </div>
  )
  }
}