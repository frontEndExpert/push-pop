import React from "react"
import Nav from "./Nav"
import Head from "./Head";

type Props = {
  title: string,
  description: string,
  children: React.ReactNode
}

const App = (props: Props) => {

  return (
    <main>
      <Head
        title={props.title || "Ordered List"}
        description={props.description || "Ordered List"}
      />
      <Nav />
      {props.children}
    </main>
  )
}
export default App;
