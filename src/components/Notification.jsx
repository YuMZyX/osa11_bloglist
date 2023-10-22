import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
  const notification = useSelector(({ notification }) => {
    return notification
  })

  if (!notification) {
    return
  }

  return <Alert>{notification}</Alert>
}

export default Notification
