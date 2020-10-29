import './Face.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

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
          <Button>
              View My Work
          </Button>
      </header>
    </div>
  );
}

export default Face;
