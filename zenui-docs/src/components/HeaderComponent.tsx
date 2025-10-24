import screen from "../assets/images/screen.png";
import Scroll from '../lib/Scroll.ts';

export default function HeaderComponent() {

  const s = (id: string)=>{
    Scroll(id);
  }

  return (
    <header id="header">
      <div className="content">
        <h1>
          <a href="#">Zen UI</a>
        </h1>
        <p>
          Simplicity and ease-of-use in a
          <br />
          {/*template brought to you by <a href="http://html5up.net">HTML5 UP</a>*/}
          beautiful package.
        </p>
        <ul className="actions">
          <li>
            <a href="javascript:void(0)" onClick={()=>{s('documentation')}} className="button primary icon solid">
              <i className="zi-book"></i> Documentation
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={()=>{s('intro')}}
              className="button icon solid  scrolly"
            >
              <i className="zi-arrow-down"></i> Learn More
            </a>
          </li>
        </ul>
      </div>
      <div className="image phone">
        <div className="inner">
          <img src={screen} alt="" />
        </div>
      </div>
    </header>
  );
}
