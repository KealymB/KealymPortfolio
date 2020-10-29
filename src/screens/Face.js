import './Face.css';
import Button from '@material-ui/core/Button';

function Face(props) {
  return (
    <div className="Face">
      <header className="App-header">
          <div className="Lead">
            {props.start}
            <div className="My-Name">
                {props.name}
            </div>
            .
          </div>
          {props.end}
          <Button paddingTop={"20"}>
              View My Work
          </Button>
      </header>
    </div>
  );
}

export default Face;
