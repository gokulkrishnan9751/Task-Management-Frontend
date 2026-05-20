import React from 'react';
import withRole from '../../hoc/withRole';

function CreateUsers() {
  return (
    <div>Create Users</div>
  );
}

export default withRole(CreateUsers, ['admin']);