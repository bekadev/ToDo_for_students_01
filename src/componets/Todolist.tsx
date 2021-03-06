import React from "react"
import { FilterValuesType } from "../App"

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        // @ts-ignore
                        return <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTasks(t.id)
                            }}>x
                            </button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={ () => {props.changeFilter('all')}}>All</button>
                <button onClick={ () => {props.changeFilter('active')}}>Active</button>
                <button onClick={ () => {props.changeFilter('complited')}}>Completed</button>
            </div>
        </div>
    )
}