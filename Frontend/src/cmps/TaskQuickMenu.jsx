import React from 'react';
import { connect } from 'react-redux';
import Modal from '@mui/material/Modal';
import { onSaveBoard, openQuickPopUp } from '../store/board.actions';
import { TaskTitleEdit } from '../cmps/TaskTitleEdit';
import { PopUpHandler } from '../cmps/PopUpHandler';
import { QuickPopUp } from '../cmps/QuickPopUp';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

class _TaskQuickMenu extends React.Component {
  state = {
    isMenuOpen: true,
    taskTitle: '',
    clickedCover: false,
    popName:'',
  };

  handleClose = (ev) => {
    ev.stopPropagation();
    if (ev.key === 'Enter') {
      const { isMenuOpen } = this.state;
      this.setState({ isMenuOpen: !isMenuOpen });
      return;
    }
  };

  toggleQuickMenu = (ev) => {
    ev.stopPropagation();
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
    this.props.handleEditIcon();
  };

  setPopUpDims = (ev,popName) => {
    const cmpName = ev.target.name;
    const cmpTitle = ev.target.title;
    const group = this.props.group;
    const task = this.props.task;
    const menuBtnDims = ev.target.getBoundingClientRect();
    let { top, left } = menuBtnDims;
    this.props.openQuickPopUp(top, left, cmpName, cmpTitle, task.id, group.id);
    const { isQuickPopUpOpen } = this.state;
    this.setState({ isQuickPopUpOpen: !isQuickPopUpOpen , popName});
  }; 

  render() {
    const { isMenuOpen, isQuickPopUpOpen } = this.state;
    const {
      task,
      width,
      height,
      right,
      onSaveBoard,
      board,
      coverColor,
      group,
      onOpenCard,
    } = this.props;
    console.log('onOpenCard', onOpenCard);
    return (
      <div>
        {isMenuOpen ? (
          <Modal
            className='quick-menu-modal'
            style={{
              bottom: this.props.bottom,
              top: this.props.top,
              left: this.props.left + 227 + 'px',
            }}
            onClose={this.handleClose}
            closeAfterTransition
            open={isMenuOpen}
            onBackdropClick={(ev) => {
              this.toggleQuickMenu(ev);
            }}
            disableAutoFocus
            onKeyDown={this.handleClose}
            onClick={this.handleClose}>
            <div>
              <div>
                <TaskTitleEdit
                  task={task}
                  width={width}
                  height={height}
                  right={right}
                  onSaveBoard={onSaveBoard}
                  board={board}
                  coverColor={coverColor}
                />
              </div>
              <div>
                <a
                  onClick={() => onOpenCard(true, task)}
                  className='quick-task-editor-buttons-items'>
                  <span style={{ display: 'flex' }}>
                    <ArtTrackIcon
                      className='task-quick-menu-icons'
                      fontSize='small'
                    />
                  </span>
                  <span className='task-quick-menu-txt'>Open card</span>
                </a>

                <a
                  className='quick-task-editor-buttons-items'
                  onClick={(ev) => this.setPopUpDims(ev,'LABELS')}
                  >
                  <LocalOfferOutlinedIcon
                    className='task-quick-menu-icons'
                    fontSize='small'
                    style={{ pointerEvents: 'none', marginRight: '4px' }}
                  />
                  Edit labels
                </a>

                <a
                 onClick={(ev) => this.setPopUpDims(ev,'MEMBERS')}
                  className='quick-task-editor-buttons-items'>
                  <span style={{ display: 'flex' }}>
                    <PersonOutlineIcon
                      className='task-quick-menu-icons'
                      fontSize='small'
                    />
                  </span>
                  <span className='task-quick-menu-txt'>Change members</span>
                </a>
              

                <a
                  className='quick-task-editor-buttons-items'
                  onClick={(ev) => this.setPopUpDims(ev,'COVERS')}
                 >
                  <VideoLabelIcon
                    className='task-quick-menu-icons'
                    fontSize='small'
                    style={{ pointerEvents: 'none', marginRight: '4px' }}
                  />
                  Change cover
                </a>

                <a className='quick-task-editor-buttons-items' 
                onClick={(ev) => this.setPopUpDims(ev,'COPY')}
                >
                  <span style={{ display: 'flex' }}>
                    <CopyAllOutlinedIcon
                      className='task-quick-menu-icons'
                      fontSize='small'
                    />
                  </span>
                  <span className='task-quick-menu-txt'>Copy</span>
                </a>

                <a
                  className='quick-task-editor-buttons-items'
                  name='archive'
                  onClick={(ev) => this.setPopUpDims(ev,'ARCHIVE')}>
                  <ArchiveOutlinedIcon
                    className='task-quick-menu-icons'
                    fontSize='small'
                    style={{ pointerEvents: 'none', marginRight: '4px' }}
                  />
                  Archive
                </a>
              </div>
              {isQuickPopUpOpen ? (
                <QuickPopUp>
                  {' '}
                  <PopUpHandler  board={board} currTask = {this.props.currTask} groupId={group.id} name={this.state.popName}/>{' '}
                </QuickPopUp>
              ) : (
                ''
              )}
            </div>
          </Modal>
        ) : (
          ''
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardModule.board,
    currPopUp: state.boardModule.currPopUp,
    currTask: state.boardModule.currTask,
  };
}

const mapDispatchToProps = {
  onSaveBoard,
  openQuickPopUp,
};

export const TaskQuickMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TaskQuickMenu);
