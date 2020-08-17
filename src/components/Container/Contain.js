import React,{useState} from 'react'
import './Contain.css'
import {Paper, Button,TextField} from '@material-ui/core'
import List from '../List/List'

function Contain() {
    const [state, setstate] = useState({text:"",todo:[],progress:[],done:[]})
    const fillText=(e)=>{
        setstate({...state,text:e.target.value})
    }

    const addtoTodo=()=>{
        if(state.text.length!==0)
            {   
                const text=state.text
                const currarr=state.todo
                currarr.push(text)
                setstate({...state,todo:currarr})
            }

    }
    const onRemoveTodo=(id)=>{
        let currarr=state.todo
        console.log(id)
        currarr.splice(id,1)
        setstate({...state,todo:currarr})
    }
    const onRemoveProgress=(id)=>{
        let currarr=state.progress
        currarr.splice(id,1)
        setstate({...state,progress:currarr})
    }
    const onRemoveDone=(id)=>{
        const currarr=state.done
        currarr.splice(id,1)
        setstate({...state,done:currarr})
    }
    const onPassTodo=(id)=>{
        const currarr=state.todo
        const item=state.todo[id]
        console.log(id)
        currarr.splice(id,1)
        const currarr2=state.progress
        currarr2.push(item)
        setstate({...state,todo:currarr,progress:currarr2})
        console.log(state)
    }
    const onPassProgress=(id)=>{
        const currarr=state.progress
        const item=state.progress[id]
        console.log(item)
        currarr.splice(id,1)
        const currarr2=state.done
        currarr2.push(item)
        setstate({...state,progress:currarr,done:currarr2})
        console.log(state)
    }
    const onPassDone=(id)=>{
        const currarr=state.done
        currarr.splice(id,1)
        setstate({...state,done:currarr})
        console.log(state)
    }
    return (
            <Paper className="contain" elevation={3}>
                <div className="header">
                <Button className="button" onClick={addtoTodo}>Add New Task</Button>
                <TextField id="standard-basic" label="Name of task" variant="filled" className="text" value={state.text} onChange={fillText}/>
                </div>
                <div className="boxes">
                <List name={"To do"} list={state.todo} onRemove={onRemoveTodo} onPass={onPassTodo}/>
                <List name={"In Progress"} list={state.progress} onRemove={onRemoveProgress} onPass={onPassProgress}/>
                <List name={"Done"} list={state.done} onRemove={onRemoveDone} onPass={onPassDone}/>
                </div>
            </Paper>
    )
}

export default Contain
