import React from 'react';
import { Navigate } from 'react-router-dom';

export default function withRole(Component, allowedRoles) {
  return (props) => {
    return <Component {...props} />;
  };
}
