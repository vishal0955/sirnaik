import React from 'react'
import { TaskTable } from '../components/Tables/TaskTable'
import TableHeader from './TableHeader';

const Tasks = () => {
  return (
    <div>
        <TableHeader />
        <TaskTable />
    </div>
  )
}

export default Tasks;