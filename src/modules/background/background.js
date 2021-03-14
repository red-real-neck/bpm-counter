import './background.scss';
import ActionWindow from "../action-window/action-window";
import InfoDrugNDropLeft from '../info-drugndrop-left/info-drugndrop-left';
import InfoDrugNDropRight from '../info-drugndrop-right/info-drugndrop-right';

function Background() {
    return (
      <div className="background">
        <InfoDrugNDropLeft/>
        <ActionWindow/>
        <InfoDrugNDropRight/>
      </div>
    );
  }
  
  export default Background;