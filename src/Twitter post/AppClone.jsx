import { Component } from "react";
import Appheader from "./AppHeader";
import PostAddForm from "./PostAddForm";
import PostList from "./PostList";
import PostStatusFilter from "./PostStatusFilter";
import SearchPanel from "./Search Panel";


export default class AppClone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {label: "I need dddsss", important: false, like: false, id: 1},
        {label: "You need dddsss", important: false, like: false, id: 2},
        {label: "He need dddsss", important: false, like: false, id: 3},
      ],
      tram: '',
      like: 'all'
    }
    this.onDelete = this.onDelete.bind(this)
    this.addForm = this.addForm.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLike = this.onToggleLike.bind(this)
    this.onSearchForm = this.onSearchForm.bind(this)
    this.onLikeForm = this.onLikeForm.bind(this)
    this.maxLen = 4;
  }
  onDelete (id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id == id)
      const arrayBefore = data.slice(0, index)
      const arrayAfter = data.slice(index + 1)
      const newArray = [...arrayBefore, ...arrayAfter]
      return {
        data: newArray
      }
    })
  }

  addForm(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxLen++
    }
    this.setState(({data}) => {
      const kupArr = [...data, newItem]
      return {
        data: kupArr
      }
    })
  }

  onToggleImportant(id) {
  this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id == id)
    const oldItem = data[index]
    const newItem = {...oldItem, important: !oldItem.important}
    const newArrImportant = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    return {
      data: newArrImportant
    }
  })
  }

  onToggleLike(id) {
    this.setState(({data}) => {
      const indexL = data.findIndex(elem => elem.id == id)
      const oldItem = data[indexL]
      const newItem = {...oldItem, like: !oldItem.like}
      const newArrLike = [...data.slice(0, indexL), newItem, ...data.slice(indexL + 1)]
  
      return {
        data: newArrLike
      }
    })
  }
  
  filterForm(clonMassiv, like) {
    if(like == 'like') {
      return clonMassiv.filter((elem) => elem.like)
    }
    else {
      return clonMassiv
    }
  }

  onLikeForm(like) {
    this.setState({like})
  }

  onSearchForm(tram) {
    this.setState({tram})
  }

  searchItem(clonMassiv, tram) {
    if(tram.length === 0) {
      return clonMassiv
    }
    return clonMassiv.filter((elem) => {
      return elem.label.indexOf(tram) > -1
    })
  }

  render() {
    let {data, tram, like} = this.state
    this.searchItem(data, tram)
    let indexPost = this.state.data.length
    let indexLike = this.state.data.filter(elem => elem.like == true).length
    const visiblePosts = this.filterForm(this.searchItem(data, tram), like)
    return (
      <div>
        <Appheader indexPost = {indexPost} indexLike = {indexLike}/>
        <div className="d-flex search-panel">
          <SearchPanel onSearchForm = {this.onSearchForm}/>
          <PostStatusFilter onLikeForm = {this.onLikeForm}/>
        </div>
        <PostList
          data = {visiblePosts}
          onDelete = {this.onDelete}
          onToggleImportant = {this.onToggleImportant}
          onToggleLike = {this.onToggleLike}
        />
        <PostAddForm addForm = {this.addForm}/>
      </div>
    )
  }
}