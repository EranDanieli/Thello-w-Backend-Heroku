import React from "react";
import { connect } from "react-redux";
import { onSaveBoards,loadBoards } from '../store/board.actions';
import { AppHeader } from "../cmps/AppHeader";
import { BoardsList } from '../cmps/BoardsList';
import { ReactComponent as BoardIcon } from "../assets/img/board-icon.svg";
import { ReactComponent as StarIcon } from "../assets/img/star-icon.svg";
import { Loader } from '../cmps/Loader';

class _BoardList extends React.Component {
 
  async componentDidMount() {
    try {
    const userId = await this.props.loggedUser._id;
    await this.props.loadBoards(userId);
     } catch (err) {
    console.log('err');
  }
}  

  get favoriteBoards() {
    const { boards } = this.props
    return boards.filter(board => board.isFavorite)
  };  
  get notFavoriteBoards() {
    const { boards } = this.props
    return boards.filter(board => !board.isFavorite)
  };  

  onToggleFavorite = (ev, boardId) => {
    ev.preventDefault()
    const { boards,onSaveBoards } = this.props
    const board = boards.find(board => board._id === boardId)
    board.isFavorite = !board.isFavorite
    onSaveBoards(boards);
  };
  onToggleBoard = (ev) =>{
    // console.log('')
  }

  render() {
    const { boards } = this.props;
    if (!boards) return <Loader/>
    return (
      <section className="board-page">
        <AppHeader />
        <section className="board-list-container flex align-flex-start justify-center">
          <div className="boards-wrapper flex column">
            <div className="boards-preview flex column">
              <div className="preview-title flex align-center">
                <StarIcon className=" far fa-star"/>
                <h3 className="flex"> Starred boards</h3>
              </div>
              <BoardsList onToggleFavorite={this.onToggleFavorite} onToggleBoard={this.onToggleBoard} boards={this.favoriteBoards} />
            </div>

            <div className={"boards-preview"}>
              <div className={"preview-title flex align-center"}>
                 <BoardIcon /> 
                <h3 className="flex">
                  {/* {loggedUser.username}'s Workspaces */}
                  Workspaces
                </h3>
              </div>
              <BoardsList onToggleFavorite={this.onToggleFavorite} onToggleBoard={this.onToggleBoard} boards={this.notFavoriteBoards} />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedUser: state.userModule.user,
    boards: state.boardModule.boards,
  };
}
const mapDispatchToProps = {
  onSaveBoards,
  loadBoards,
};

export const BoardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BoardList);
