import "./button.css"

export default function Button({style, text, arrow}) {

  return (

    <button className={style}>
        {text}
        {arrow && <span className="arrow-icon">➔</span>}
    </button>

    //➔
  )


}
