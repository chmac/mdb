import React from 'react'
import { Accounts, STATES } from "meteor/std:accounts-semantic"

export default SignIn = function () {
  return (
    <div className="ui centered stackable grid">
      <div className="six wide column">
        <Accounts.ui.LoginForm formState={STATES.SIGN_IN}/>
      </div>
    </div>
  )
}