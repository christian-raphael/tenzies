import Die from "./components/Die"

export default function App() {
  return (
    <main>
        <div className="dice-container">
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
          <Die value={3}/>
        </div>
    </main>
  )
}
