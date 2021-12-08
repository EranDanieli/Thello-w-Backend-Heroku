import * as React from 'react';
import { connect } from 'react-redux'
import {onSaveBoard,openQuickPopUp,onSetTask,updateBoard } from '../store/board.actions'
import { makeStyles } from '@material-ui/styles';
import { QuickPopUp } from '../cmps/QuickPopUp'
import { PopUpHandler } from '../cmps/PopUpHandler'
import TextField from '@mui/material/TextField';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';



const useStyles = makeStyles({
  paper: {
  
  },
  title: {
    fontSize: 12 + 'px',
    color: '#5e6c84',
    fontWeight: 500,
    lineHeight: 20 + 'px',
    marginBottom: -4 + 'px',
    textTransform: 'uppercase',
    marginTop: 8 + 'px',
    display: 'block',
    fontFamily:
      ' -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;',
  },
  field: {

  },
  icon: {
    fontSize: 16 + 'px',
    margin: '0 6px 0 -6px',
  },
});

 function _SideMenu(props) {
  const [open, setOpen] = React.useState(false);
  const [isClicked, click] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [valueDate, onDateChange] = React.useState(props.currTask.dueDate || new Date());
  const classes = useStyles();


  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

 
 const setPopUpDims =(ev,group,task,title)=> {
  let top = 215
  if(title=== 'Archive'){
    top = 400
  }
    const cmpName = ev.target.name
    const cmpTitle = title
    const menuBtnDims = ev.target.getBoundingClientRect();
    let {  left } = menuBtnDims;
    props.openQuickPopUp(top, left, cmpName, cmpTitle, task.id, group.id)
    click(isClicked? null : title);
};


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction='row' spacing={2}>
      <Paper className={classes.paper}   >
        <MenuList 
     
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5 + 'px',
            textAlign: 'left',
          }}>
          <span className={classes.title}>add to card</span>

        
            <a name="MEMBERS"  
          
          className={`MuiButtonBase-root`}  onClick={(ev) => {setPopUpDims(ev,props.group,props.task,"Members")}}>
            <span>
              <PersonOutlineOutlinedIcon style={{ pointerEvents: 'none'}} className={classes.icon} />
            </span>
            Members
            </a>
           {isClicked==='Members' &&  <QuickPopUp> <PopUpHandler from={'MainDialog'} groupId={props.group.id}  />  </QuickPopUp> }
          {isClicked==='Labels' && <QuickPopUp> <PopUpHandler from={'MainDialog'} groupId={props.group.id}/> </QuickPopUp> }
          {isClicked==='Cover' && <div> <QuickPopUp> <PopUpHandler from={'MainDialog'} groupId={props.group.id}  />  </QuickPopUp> </div>}
           

            <a name="LABELS"  
          
          className={`MuiButtonBase-root`}  onClick={(ev) => {setPopUpDims(ev,props.group,props.task,"Labels")}}>
            <span>
              <LocalOfferOutlinedIcon style={{ pointerEvents: 'none'}} className={classes.icon}  />
            </span>
            Labels
          </a>

    
          <MenuItem className={`MuiButtonBase-root`}
          onClick={(ev) => {setPopUpDims(ev,props.group,props.task,"Dates")}}
          >
            <span>
              <AccessTimeOutlinedIcon className={classes.icon} />
            </span>
            Dates  
          </MenuItem>
          {isClicked==='Dates' && <div> <QuickPopUp> <PopUpHandler  input={false}
                inputFormat='MM/dd/yyyy'
                value={props.value}
                renderInput={(params) => <TextField {...params} />}
                onChange={props.onChange} groupId={props.group.id} name={'DATES'} />  </QuickPopUp> </div>}
        
          <a name="COVERS"  
          
          className={`MuiButtonBase-root`}  onClick={(ev) => {setPopUpDims(ev,props.group,props.task,"Cover")}}>
            <span>
              <PanoramaOutlinedIcon style={{ pointerEvents: 'none'}} className={classes.icon} />
            </span>
            Cover
            </a>
           
          <span className={classes.title}>actions </span>
     
    

          <a name="COPY"  
          
          className={`MuiButtonBase-root`}  onClick={(ev) => {setPopUpDims(ev,props.group,props.task,"Copy")}}>
            <span>
              <ContentCopyOutlinedIcon style={{ pointerEvents: 'none'}} className={classes.icon} />
            </span>
            Copy
            </a>
           
           {isClicked==='Copy' &&  <QuickPopUp> <PopUpHandler from={'MainDialog'} groupId={props.group.id}  />  </QuickPopUp> }
          
          <a name="ARCHIVE"  
          
          className={`MuiButtonBase-root`}  onClick={(ev) => {setPopUpDims(ev,props.group,props.task,"Archive")}}>
            <span>
              <ArchiveOutlinedIcon style={{ pointerEvents: 'none'}} className={classes.icon} />
            </span>
            Archive
            </a>
            {isClicked==='Archive' &&  <QuickPopUp> <PopUpHandler from={'MainDialog'} groupId={props.group.id}  />  </QuickPopUp> }
        </MenuList>
      </Paper>
      <div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement='bottom-start'
          transition
          disablePortal
          display={'none'}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                 
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
function mapStateToProps(state) {
  return {
      board: state.boardModule.board,
      currPopUp: state.boardModule.currPopUp,
      currTask: state.boardModule.currTask,

  }
}

const mapDispatchToProps = {
  onSaveBoard,
  openQuickPopUp,
  onSetTask,
  updateBoard
}


export const SideMenu = connect(mapStateToProps, mapDispatchToProps)(_SideMenu)