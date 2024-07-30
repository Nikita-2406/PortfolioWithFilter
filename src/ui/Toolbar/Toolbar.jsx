export const Toolbar = (props) => {
  const filters = props.filters
  const selected = props.selected
  const onSelectFilter = props.onSelectFilter

  const handler = (e) => {
    onSelectFilter(e.target.textContent)
    document.querySelector(`[name="${selected}"]`).classList.remove("checked")
    e.target.classList.add("checked")
  }

  return (
    <div className="toolbar">
      <button className="toolbar_button checked" onClick={handler} name="All">All</button>
      <button className="toolbar_button" onClick={handler} name="Websites">Websites</button>
      <button className="toolbar_button" onClick={handler} name="Flayers">Flayers</button>
      <button className="toolbar_button" onClick={handler} name="Business Cards">Business Cards</button>
    </div>
  )
}
