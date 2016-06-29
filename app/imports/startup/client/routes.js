// JSX files have to import react
import React from 'react'
// Import react mounter instead of react-layout (npm)
import { mount } from 'react-mounter'

import IndexContainer from '/imports/ui/layouts/IndexContainer.jsx'
import SignIn from '/imports/ui/components/auth/SignIn.jsx'

// Import components used by the router
import AppContainer from '/imports/ui/layouts/AppContainer'

// Group public routes
const router = FlowRouter.group({})

// Define index route
router.route('/', {
  name: 'index',
  action() {
    // Render Layout component and inject AppContainer component
    // as props.children
    mount(AppContainer, {children: <IndexContainer/>})
  }
})

router.route('/signin', {
  name: 'signin',
  action() {
    mount(AppContainer, {children: <SignIn/>})
  }
})
