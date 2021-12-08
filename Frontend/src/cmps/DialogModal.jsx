import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { SideMenu } from './SideMenuDialog';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import { onSaveBoard, onSetTask, updateBoard,openQuickPopUp } from '../store/board.actions';
import { Box, display } from '@mui/system';
import { FormControl, LinearProgress } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { ReactComponent as DescIcon } from '../assets/img/board/description.svg';
import { QuickPopUp } from './QuickPopUp';
import { PopUpHandler } from './PopUpHandler';
import MyDTPicker from './TimeDatePicker';
import { blue } from '@mui/material/colors';
function _DialogModal(props) {
  const {
    onClose,
    open,
    currTask,
    board,
    onSetTask,
  } = props;
  const { style } = currTask;
  const [value, setValue] = React.useState(currTask.title);
  const [valueDate, onDateChange] = React.useState(currTask.dueDate || new Date());
  const [isClicked, click] = React.useState(false);
  const TitleInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      height: 33 + 'px',
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#f4f5f7' : '#fff',
      border: 'none',
      fontSize: 20,
      fontWeight: 600,
      width: 500 + 'px',
      padding: '0px 10px',
      margin: '-8px 30px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        boxShadow: 'rgb(0,121,191) 0px 0px 0px 2px inset',
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  const DescriptionInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      height: 56 + 'px',
      borderRadius: 2,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#091e420a' : 'white',
      border: 'none',
      fontSize: 14,
      fontWeight: 400,
      color: '#172b4d',
      width: 480 + 'px',
      padding: '0px 10px',
      marginTop: 20 + 'px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
        'backgroundColor',
        'height',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        boxShadow: 'rgba(0,121,191,0.79) 0px 0px 0px 1.5728px inset',
        borderColor: theme.palette.primary.main,
        backgroundColor: 'white',
        paddingBottom: 50 + 'px',
        width: 480 + 'px',
      },
    },
  }));
  const handleChange = (event, key) => {
    event.stopPropagation();
    if (event.key === 'Enter' || event.type === 'blur') {
      if (key === 'title') {
        setValue(event.target.value);
      }
      currTask[key] = event.target.value;
      SaveTaskAndBoard(currTask);
    }
  };
 
  const onSaveDate = (ev) => {
    onDateChange({...ev});
    const { currTask, board, groupId } = props;
    currTask.dueDate = ev._d.toString().substring(0, 25);
    const taskToSave = { ...currTask, dueDate: ev._d };
    props.onSetTask({...currTask});
    const boardToSave = updateBoard(board, groupId, currTask.id, taskToSave);
    props.onSaveBoard(boardToSave);
  };

  const SaveTaskAndBoard = (currTask) => {
    const taskToSave = { ...currTask };
    onSetTask(taskToSave);
    const boardToSave = updateBoard(
      board,
      props.group.id,
      currTask.id,
      currTask
    );
    props.onSaveBoard(boardToSave);
  };
  const handleCheck = (ev,idx,todoId) =>{
    console.log('ev,idx,todoId',ev,idx,todoId)
    currTask.checklists[idx].todos.forEach((todo)=>{if (todo.id===todoId) {todo.isDone=!todo.isDone}})
    onSetTask({...currTask})
  }
  const setPopUpDims =(ev,group,task,title)=> {
 
    const cmpName = ev.target.name
    const cmpTitle = title
    const menuBtnDims = ev.target.getBoundingClientRect();
    let { top, left } = menuBtnDims;
    props.openQuickPopUp(top, left, cmpName, cmpTitle, task.id, group.id)
    click(isClicked? null : title);
};
console.log('currTask',currTask)
console.log('currTask.checklists',currTask.checklists)
  return (
    <Dialog onClose={props.onClose} open={open} className={'DIALOG-CMP'}
    >
      {style.coverColor.length !== 0 && (
        <div
          className={'cover'}
          style={{ backgroundColor: style.coverColor }}></div>
      )}
      {style.imgUrl.length !== 0 && (
        <div
          className={'urlImg-cover'}
          style={{
            backgroundImage: `url(${currTask.style.imgUrl})`,
            height: 145 + 'px',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#5f9ea0a8',
          }}></div>
      )}
      <section className={'dialog-container'}>
        <header className={'header-dialog'}>
          <IconButton
            className={'close-btn'}
            onClick={() => {
              onClose();
            }}>
            <CloseIcon />
          </IconButton>
          <DialogTitle>
            <Box
              component='form'
              noValidate
              sx={{
                width: 100 + '%',
              }}>
              <TvOutlinedIcon sx={{ position: 'absolute' }} />
              <FormControl
                variant='standard'
                onKeyDown={(ev) => handleChange(ev, 'title')}
                onBlur={(ev) => handleChange(ev, 'title')}>
                <TitleInput defaultValue={value} id='bootstrap-input' />
              </FormControl>{' '}
            </Box>
            <div className={'in-list-dialog'}>
              in list:{' '}
              {
                <span style={{ textDecorationLine: 'underline' }}>
                  {props.groupTitle}
                </span>
              }{' '}
            </div>
          </DialogTitle>
        </header>
        <main className={'main'}>
          <div className={'details-badges-section'}>
            <div className='card-detail-item u-clearfix js-card-detail-members'>
              <h3 className='card-detail-item-header mod-no-top-margin'>
                Members
              </h3>
             {currTask.members && <div className='js-card-detail-members-list'>
                {currTask.members.map((member, idx) => {
                  if (member.isAssigned)
                    return (
                      <div
                        key={idx}
                        className='member member-on-card'
                        title={member.fullname}>
                        {member.fullname.substring(0, 1)}
                      </div>
                    );
                })}
                <div className={'add-btn-member'}>
                  {' '}
                  <a
                    name='MEMBERS'
                    className={`MuiButtonBase-root`}
                    onClick={(ev) => {
                      setPopUpDims(ev, props.group, currTask, 'Members');
                    }}>
                    +
                  </a>
                  {isClicked === 'Members' && (
                    <QuickPopUp>
                      {' '}
                      <PopUpHandler
                        from={'MainDialog'}
                        groupId={props.group.id}
                      />{' '}
                    </QuickPopUp>
                  )}
                </div>
              </div>}
            </div>

            <div className={'card-detail-item labels'}>
              {currTask.labelIds.length !== 0 && (
                <h3 className='card-detail-item-header'>Labels</h3>
              )}
              <div className='u-clearfix js-card-detail-labels-list js-edit-label'>
                <div>
                  {currTask.labelIds.map((labelId) => {
                    return board.labels.map((label, idx) => {
                      if (label.id === labelId)
                        return (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: label.color,
                              color: '#fff',
                              fontWeight: '600',
                            }}
                            className='card-label card-label-green mod-card-detail mod-clickable'>
                            {' '}
                            <span className='label-text'>{label.title}</span>
                          </div>
                        );
                    });
                  })}
                </div>
              </div>
            </div>
            <div className={'card-detail-item due-date'}>
              <div className={'card-detail-item-header'}>DUE DATE</div>
           
              <MyDTPicker
                input={true}
                inputFormat='MM/dd/yyyy'
                value={valueDate}
                renderInput={(params) => <TextField {...params} />}
                onChange={onSaveDate}
              />
            </div>
          </div>

          <div className={'description-container'}>
            <div className={'description-header'}>
              <div className={'desc-icon'}>
                <DescIcon style={{ position: 'absolute', left: 30 + 'px' }} />
                <span className={'description-title'}>Description</span>
              </div>
            </div>
            <div className={'description-textarea'}>
              <Box
                component='form'
                noValidate
                sx={{
                  width: 100 + '%',
                }}>
                <FormControl
                  className={'description-form-control'}
                  variant='standard'
                  onKeyDown={(ev) => handleChange(ev, 'description')}
                  onBlur={(ev) => handleChange(ev, 'description')}>
                  <DescriptionInput
                    defaultValue={currTask.description}
                    id='bootstrap-input-description'
                    placeholder={'add a more detailed description...'}
                  />
                </FormControl>{' '}
              </Box>
            </div>
          </div>

        {currTask.checklists?.length !== 0 && currTask.checklists.map((checklist,idx)=>{
          return  <div key={idx} className={'checklist-container'}>
          <div className={'checklist-header'}>
            <div className={'checklist-icon'}>
              <CheckBoxOutlinedIcon style={{ position: 'absolute', left: 30 + 'px' }} />
              <span style={{marginLeft:'50px'}} className={'checklist-title'}>{checklist.title}</span>
              
            </div>
          </div>

         
          <div>
            <span>
          10 %
            </span>
            <div style={{display:'inline-block',width:'85%'}}>
          <LinearProgress sx={{marginLeft:'20px'}} value={10} color={'primary'} variant='determinate'/>
            </div>
          </div>
          {checklist.todos.map((todo)=>{
            return <div>
             <FormGroup>
      <FormControlLabel control={<Checkbox checked={todo.isDone} onChange={(ev)=>handleCheck(ev,idx,todo.id)} />} label={todo.title} />
    </FormGroup>
          </div>
          })}
            
              <button>Add an item</button>  
        </div>
})}
        </main>
        <section className={'sidebar-menu-dialog'}>
          <SideMenu
            groupId={props.groupId}
            group={props.group}
            task={currTask}
            onChange={onSaveDate}
          />
        </section>
      </section>
    </Dialog>
  );
}

_DialogModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.userModule.user,
    board: state.boardModule.board,
    currTask: state.boardModule.currTask,
  };
}
const mapDispatchToProps = {
  updateBoard,
  onSetTask,
  onSaveBoard,
  openQuickPopUp,
};

export const DialogModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DialogModal);
