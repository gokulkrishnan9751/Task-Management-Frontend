import React from 'react'
import withRole from '../../hoc/withRole';

function Users() {
  return (
    <div>Users</div>
  )
}

export default withRole(Users, ['admin']);
