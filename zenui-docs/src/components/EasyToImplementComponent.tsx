import Scroll from '../lib/Scroll.ts';

export default function EasyToImplementComponent(){


  const s = (id: string)=>{
    Scroll(id);
  }
  return (
    <section id="eements" className="wrapper style2 special">
      <header className="major">
        <h2>Easy to implement</h2>
        <p>
          Gravida at leo elementum elit fusce accumsan dui libero, quis
          vehicula
          <br />
          lectus ultricies eu. In convallis amet leo sapien iaculis efficitur.
        </p>
      </header>
      <ul className="actions special">
        <li>
          <a href="javascript:void(0)" onClick={()=>{s('documentation')}} className="button primary icon solid fa-book">
            Documentation
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick={()=>{s('intro')}} className="button">
            Learn More
          </a>
        </li>
      </ul>
    </section>
  );
}
