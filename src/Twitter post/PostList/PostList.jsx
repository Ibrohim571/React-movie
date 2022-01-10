import PostListItem from "../PostListItem"


const PostList = ({data, onDelete, onToggleImportant, onToggleLike}) => {
  let extendes = data.map((item) => {
    let {id, ...items} = item;
    return (
      <PostListItem
        key = {id} {...items}
        onDelete = {() => onDelete(id)}
        onToggleImportant = {() => onToggleImportant(id)}
        onToggleLike = {() => onToggleLike(id)}
      />
    )
  })
  return (
    <ul className="app-list list-group">
      {extendes}
    </ul>
  )
}

export default PostList