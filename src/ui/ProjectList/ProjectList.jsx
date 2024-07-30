export const ProjectList = (props) => {
  const portfolio = props.projects 
  let line = portfolio.map(elem => <img src={elem.img} className="picture" />)
  
  return (<>
    {line}
  </>)
}
