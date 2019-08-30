import React from "react"
import "./workplace.scss"

const Workplace = ({ timeframe, title, company, children }) => {
  return (
    <div className="workplace">
      <div className="workplace__illustration">
        <svg viewBox="0 0 100 100" className="workplace__circle">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <div className="workplace__line"></div>
      </div>
      <div className="workplace__content">
        <div className="workplace__timeframe">{timeframe}</div>
        <div className="workplace__description">
          <h3 className="workplace__title">
            <span className="workplace__title">{title}</span>
            <br />
            <span className="workplace__company">{company}</span>
          </h3>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Workplace
