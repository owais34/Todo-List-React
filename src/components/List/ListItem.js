import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './ListItem.css'

function ListItem({name,onRemove,onPass,id2}) {
    var id=id2 

    const onPassItem=()=>{
        onPass(id)
    }
    const onRemoveItem=()=>{
        onRemove(id)
    }
    return (
        <div className="list-item">
            <div className="list-item-header">
            <IconButton onClick={onPassItem} className="button-item">
                <ChevronRightIcon />
            </IconButton>
            <IconButton onClick={onRemoveItem} className="button-item-2">
                <Cancel />
            </IconButton>
            </div>
            <h3>{name}</h3>      
        </div>
    )
}

export default ListItem
