
export default function PropsList(props) {
  return(
    <div>
      <div>
      <p key = {props.cds.id} onClick = {props.Pclick}>{props.cds.name}</p>
      <button onClick = {() => props.Pclick(props.cds.id)}>Delete</button>
      </div>
      
    </div>
  )
}