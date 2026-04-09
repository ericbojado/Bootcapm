import ReactDOM from 'react-dom/client';  
/*
const Title = (props) => {
  return <h1>{props.course}</h1>
}
Todo lo Anterior se puede simplificar en lo siguiente:*/
const Title = ({encabezado}) => <h1>{encabezado}</h1>

const Content = (props) => {
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  const suma = props.exercises1 + props.exercises2 + props.exercises3

  return (<p>Number of exercises {suma}</p>)
}

const App = () => {
  const texto = 'Desarrollo de aplicaciones Half Stack'
  const part1 = 'Fundamentos de React'
  const exercises1 = 10
  const part2 = 'Utilizar props para pasar datos'
  const exercises2 = 7
  const part3 = 'Estado de un componente'
  const exercises3 = 14

  return (
    <div>
      <Title encabezado={texto} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);