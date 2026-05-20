import React from 'react'
import withRole from '../../hoc/withRole';

function DashBoard() {
  return (
    <div>DashBoard</div>
  )
}

export default withRole(DashBoard, ['admin']);
