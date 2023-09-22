import { useState } from "react";
import "./App.scss";

function App() {
  const str1 = "text1";
  const str2 = "text1";
  const name = "user";
  const age = "30";
  const arr = [1,2,3,4,5];
  const obj = {name: 'john', surname: 'smit'};
  const attr = "block";
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
  const items = <><li>text1</li> <li>text2</li> <li>text3</li></>;
  const num1 = 3;
	const num2 = 2;
  const name1 = 'john';
	const surname = 'smit';
  const num = 4;
  const age1 = 19;
  const isAuth = true;  
  let textb;
  const isAuth1 = false;
	const isAdult = true;
  if (isAdult) {
		textb = <p>18</p>;
	} else {
    textb = <p>false</p>
  }
  let textd;
	const isAdmin = true;
  if (isAdmin) {
		textd = <><p>fa</p><p>fal</p></>;
	} else {
    textd = false
  }
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const dicrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div id={attr}  className="container">
        <p className="text-count">{count}</p>
        <button className="button" onClick={increment}>+1</button>
        <button className="button" onClick={dicrement}>-1</button>
        {/* Задание 7 */}
        <p className="text1">текст</p>
        <p className="text2">текст</p>
        <input />
        {/* Задание 12 */}
        <input /><input /><input />
        {/* Задание 13 */}
        <p>{str1}</p>
        <p>{str2}</p>
        {/* Задание 14 */}
        <p>name:{name}</p>
        <p>age:{age}</p>
        {/* Задание 15 */}
        <ul>
          <li>{arr[0]}</li>
          <li>{arr[1]}</li>
          <li>{arr[2]}</li>
          <li>{arr[3]}</li>
          <li>{arr[4]}</li>
        </ul>
        {/* Задание 16 */}
        <p>name:<span>{obj.name}</span><br/>surname:<span>{obj.surname}</span></p>
        {/* Задание 19 */}
        <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
        {/* Задание 20 */}
        <ul>
          {items}
        </ul>
        {/* Задание 22 */}
        <input /> <br/>
        <input />
        {/* Задание 23 */}
        <table>
        <tbody>
			<tr>
				<td>1</td>
				<td>2</td>
        <td>4</td>
			</tr>
			<tr>
				<td>3</td>
				<td>4</td>
        <td>4</td>
			</tr>
      <tr>
				<td>3</td>
				<td>4</td>
        <td>4</td>
			</tr>
		</tbody>
        </table>
      </div >
        <div className="container">
          {/* Задание 8 */}
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
          {/* Задание 24 */}
          result: {num1 ** num2} <br />
          result: {name1 + ' ' + surname} <br />
          result: {Math.sqrt(num)}
          {/* Задание 26 */}
          <p>{textb}</p>
          {/* Задание 27 */}
          {textd}
          {/* Задание 28 */}
          {age1 <18? <p>text</p> : <p>text1</p>}
          {/* Задание 29 */}
          {isAuth ? <p>Вы авторизованы</p> : <p>no</p>}
          {/* Задание 30 */}
          {!isAuth1 && <p>пожалуйста, авторизуйтесь</p>}
        </div>
    </>
  );
}

export default App;
