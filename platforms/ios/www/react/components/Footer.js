import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'
import { TODO_FILETER_ACTIONS } from '../actions/constants'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        Show:
        {" "}
        <FilterLink filter={TODO_FILETER_ACTIONS.SHOW_ALL}>
          All
        </FilterLink>
        {", "}
        <FilterLink filter={TODO_FILETER_ACTIONS.SHOW_ACTIVE}>
          Active
        </FilterLink>
        {", "}
        <FilterLink filter={TODO_FILETER_ACTIONS.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </p>
    );
  }
}
// const Footer = () => (
//   <p>
//     Show:
//     {" "}
//     <FilterLink filter="SHOW_ALL">
//       All
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_ACTIVE">
//       Active
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_COMPLETED">
//       Completed
//     </FilterLink>
//   </p>
// )

export default Footer
