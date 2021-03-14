import './action-window.scss';
import InfoWindow from '../info-window/info-window';
import DragNDropWindow from '../dragndrop-window/dragndrop-window';

function ActionWindow() {
    return (
      <div className="action-window">
          <InfoWindow/>
          <DragNDropWindow/>
      </div>
    );
  }
  
  export default ActionWindow;