import './App.css';

function App() {
  return (
      <>
      <div className="header">
        <h1 id="title">Glassmorphism</h1>
        <p id="description">Form</p>
      </div>
  <form id="survey-form">

    <label id="name-label">Name</label>
    <input id="name" type="text" placeholder="enter your name" required/>
    <label id="email-label">Email</label>
    <input id="email" type="email" placeholder="enter your email" required/>
    <label id="number-label">Phone no:</label>
    <input id="number" type="number" placeholder="enter your phone number" min="6" max="20" required/>

    <div id="option-container">
      <h1 id="option-text">Choose an option</h1>
      <select id="dropdown">
        <option>Lorem Ipsum1</option>
        <option>Lorem Ipsum2</option>
      </select>
    </div>

    <div className="wrapper">
      <h1 id="radio-text">quia or dolor</h1>
      <label><input type="radio" name="radio-input" value="quia" />
        quia</label>
      <label><input type="radio" name="radio-input" value="dolor" />
        dolor</label>
    </div>

    <div className="wrapper">
      <h1 id="checkbox-text">pick your order</h1>
      <label>
        <input type="checkbox" value="Lorem" />
        Lorem</label>
      <label>
        <input type="checkbox" value="Ipsum" />
        Ipsum</label>
      <label>
        <input type="checkbox" value="Lorem Ipsum" />
        Lorem Ipsum</label>
      </div>

    <textarea placeholder="send me message" rows="8"></textarea>

    <button id = "submit">Submit</button>
  </form>
  </>
  );
}

export default App;
