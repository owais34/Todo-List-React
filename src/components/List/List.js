import React from 'react'
import './List.css'
import {Paper} from '@material-ui/core'
import ListItem from './ListItem'

function List({name,list,onRemove,onPass}) {
    
    return (
        <Paper className="list">
            <h3>{name}</h3>
            <div className="item-container">
            {list.map((item,index)=>(
                <ListItem name={item} id={index} onRemove={onRemove} onPass={onPass} id2={index}/>
            ))}
            </div>
        </Paper>
    )
}

export default List
