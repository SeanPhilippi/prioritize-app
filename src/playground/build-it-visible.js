console.log('visible is running!');

let visibility = false;
let details = "here's some details"

const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>
            Hey, these are some details you can now see!
          </p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'));
}

render();