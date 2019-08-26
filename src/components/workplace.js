import React from "react"

const Workplace = ({ timeframe, title, company, children }) => {
  return (
    <div class="workplace">
      <h3>
        <span class="workplace_title">{title}</span>
        <br />
        <span class="workplace_company">{company}</span>
      </h3>
      <div class="workplace__timeframe">{timeframe}</div>
      {children}
    </div>
  )
}

export default Workplace
