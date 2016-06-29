import {Accounts} from 'meteor/std:accounts-semantic'

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/signin',
  homeRoutePath: '/app',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/'),
  onPostSignUpHook: () => FlowRouter.go('/')
});
