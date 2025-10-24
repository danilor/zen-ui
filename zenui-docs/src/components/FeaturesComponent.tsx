import rock from './../assets/images/rock.png';
import coding from './../assets/images/coding.png';
import house from './../assets/images/house.png';

export default function FeaturesComponent() {
  return (
    <section id="features" className="wrapper">
      <div className="inner alt">
        <section className="spotlight">
          <div className="image">
            <img src={rock} alt="Rock" />
          </div>
          <div className="content">
            <h3>
              <i className="zi-great-buddha"></i> Built with simplicity in mind
            </h3>
            <p style={{ textAlign: 'justify' }}>
              Zen UI is a library with a focus on simplicity and ease of use.
              ZEN UI was built upon the idea of providing a set of essential
              components that can be easily integrated into any React Native
              application and customized to fit the specific needs of the
              project; but keeping the number of external dependencies to a
              minimum.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={coding} alt="" />
          </div>
          <div className="content">
            <h3>
              Inspiration is a path <i className="zi-buddha-hand"></i>
            </h3>
            <p style={{ textAlign: 'justify' }}>
              Inspired by libraries like{' '}
              <a
                href="https://callstack.github.io/react-native-paper/"
                target={'_blank'}
              >
                React Native Paper
              </a>{' '}
              and{' '}
              <a
                href={'https://akveo.github.io/react-native-ui-kitten/'}
                target={'_blank'}
              >
                UI KItten
              </a>
              , ZEN UI doesn't aim to be a comprehensive solution for all UI
              needs, but rather a starting point for developers looking for a
              simple and effective way to build their applications.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={house} alt="" />
          </div>
          <div className="content">
            <h3><i className="zi-pagoda"></i> Simple mind, simple core</h3>
            <p style={{ textAlign: 'justify' }}>
              ZenUI's core philosophy is to provide a simple and effective
              solution, and to avoid unnecessary complexity. That is why ZenUI
              does not have any external dependencies, everything is using the
              built-in React Native features; making it easy to integrate into
              any project without worrying about compatibility issues or bloat.
              With ZenUI, developers can focus on building great applications
              without getting bogged down by complex UI libraries.
            </p>
          </div>
        </section>
        <section className="special">
          <ul className="icons labeled">
            <li>

              <span className="icon solid fa-code">
                <span className="label">Easy to implement</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-brush">
                <span className="label">Built-in dark and light themes</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-sync">
                <span className="label">Sed vehicula elementum</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-cloud">
                <span className="label">Easy to install</span>
              </span>
            </li>

            <li>
              <span className="icon solid fa-flag">
                <span className="label">No external dependencies</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
