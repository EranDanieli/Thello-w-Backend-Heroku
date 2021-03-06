import { connect } from 'react-redux'
import {Labels} from '../cmps/Labels'
import {Covers} from '../cmps/Covers'
import { Archive } from './ArchiveTask'
import { Copy } from './CopyTask'
import {Members} from './MembersTask'
import MyDTPicker from './TimeDatePicker'





function _PopUpHandler(props) {
    const {currPopUp} = props
    const {from,groupId} = props
    const { name } = currPopUp
    if(from==='MainDialog'){
        switch (name) {
            case 'LABELS': return <Labels from={'MainDialog'} groupId={groupId} />;  
            case 'COVERS': return <Covers from={'MainDialog'} groupId={groupId} />;  
            case 'ARCHIVE': return <Archive from={'MainDialog'} groupId={groupId} />;  
            case 'COPY': return <Copy from={'MainDialog'} groupId={groupId}  />;  
            case 'MEMBERS': return <Members from={'MainDialog'} groupId={groupId}  />;  
           
        }
    }
console.log('props',props)
    switch (props.name) {
        case 'LABELS': return <Labels />;  
        case 'COVERS': return <Covers />;  
        case 'MEMBERS': return <Members groupId={groupId}/>;
        case 'COPY': return <Copy groupId={groupId}/>
        case 'ARCHIVE': return <Archive groupId={groupId} />;
        case 'DATES': return <MyDTPicker renderInput={props.renderInput} input={ props.input } onChange={(ev)=>props.onChange(ev)} value = {props.value} groupId={groupId}  />;  
    }

}

function mapStateToProps(state) {
    return {
    
        currPopUp: state.boardModule.currPopUp
    }
}

export const PopUpHandler = connect(mapStateToProps, null)(_PopUpHandler)