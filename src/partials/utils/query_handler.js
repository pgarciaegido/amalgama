import { errorMessage } from './error_messages'
import { successMessage } from './sucess_messages'

module.exports = function queryHandler (query) {
  if (query === '') return ''

  // e=error?u=user?m=mail
  const q = query.split('?')

  // Gives info in case of error so the user doesn't lose whats hes wrote
  let feedback = {}
  // For each query separated by ?, we create an object value:
  for (let i in q) {
    feedback[q[i].split('=')[0]] = q[i].split('=')[1]
  }
  // If there is an error query, translate it into a readable feedback message
  // to send to client using errorMessage function
  if (feedback.e) {
    feedback.e = errorMessage(feedback.e)
  }
  // Same with success messages
  else if (feedback.suc) {
    feedback.suc = successMessage(feedback.suc)
  }

  return feedback
}
