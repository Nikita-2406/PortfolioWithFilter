export const ProjectList = (props) => {
  const portfolio = props.projects 
  let line = []
  for (const iterator of portfolio) {
    line.push(<img src={iterator.img} className="picture" />)
  }
  console.log(line)
  return (<>
    {line}
  </>)
}
