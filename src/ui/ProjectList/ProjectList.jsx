export const ProjectList = ({projects}) => {
  
  let line = projects.map(elem => <img src={elem.img} className="picture" />)
  
  return (<>
    {line}
  </>)
}
