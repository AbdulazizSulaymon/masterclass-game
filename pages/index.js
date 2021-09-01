
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import styled from "styled-components"

const BoardWrapper = styled.div`
  .board{
    font-size: 60px;
    font-weight: bold;
    width: 200px;
    height: 200px;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: indigo;
    border-radius: 20px;
    margin: 40px auto;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.6);
    overflow: hidden;

    input{
      background-color: transparent;
      color: white;
    }
  }
`;

const Board = () => {
  const [numbers, setNumbers] = useState([]);
  const [isShow, setisShow] = useState(true);
  const [value, setvalue] = useState("")

  console.log(numbers);
  useEffect(() => {
    setNumbers([Math.floor(Math.random() * 100)])
  }, [])

  useEffect(() => {
    setTimeout(() => { setisShow(false) }, 2000)
  }, [])

  const check = () => {
    if (value == numbers[0]) {
      alert("Tabriklaymiz yutdingiz")
    }
    else {
      alert("Yutqizdingiz")
    }
  }

  return <BoardWrapper className="">
    <div className="board">
      {isShow ? numbers[0] : <input value={value} onChange={e => setvalue(e.target.value)}
        className="border-none p-5 w-100"></input>}
    </div>
    {isShow ? "" : <button className="btn btn-primary" onClick={check}>Check</button>}
  </BoardWrapper>
}


export default function Home() {

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h1>Xotira O'yini</h1>
        <h1>Daraja: 1</h1>
      </div>
      <div className="text-center mt-5">
        <Board >  </Board>
      </div>
    </div>
  )
}
