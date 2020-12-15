import './App.css';

function App() {
  const curHour = new Date().getHours();
  let greeting = '';
  const cssStyle = {};
  if (curHour >= 1 && curHour < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';
  } else if (curHour >= 12 && curHour < 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
  } else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
  }
  return (
    <div>
      <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
    </div>
  );
}

export default App;
