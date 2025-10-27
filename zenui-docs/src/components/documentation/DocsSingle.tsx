import Scroll from '../../lib/Scroll.ts';
import CodeExample from '../common/CodeExample.tsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DocsSingle(data: any) {
  return (
    <div
      className={'single_doc'}
      id={data.title?.toLowerCase().replace(/\s+/g, '-')}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 8 }}>
          {data.title && (
            <h3>
              <i className={data.icon ?? 'zi-codepen'}></i> {data.title}
            </h3>
          )}
        </div>
        <div style={{ flex: 4 }}>
          {data.author && (
            <p className={'right pClose'}>
              <i className="zi-user"></i> {data.author}
            </p>
          )}
          {data.version && (
            <p className={'right pClose'}>
              <i className="zi-notification"></i> {data.version}
            </p>
          )}
        </div>
      </header>
      {data.description && <p className={'justify'}>{data.description}</p>}

      {data.example && data.example.length > 0 && (
        <>
          <h4>Example</h4>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.example.map((example: any, index: number) => (
              <div key={`example-${index}-${data.title}`}>
                <CodeExample type={example.language}>
                  {example.code}
                </CodeExample>
              </div>
            ))
          }
        </>
      )}

      {data.params && data.params.length > 0 && (
        <>
          <div className="table-wrapper">
            <h4>Parameters</h4>
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  data.params.map((param: any, index: number) => (
                    <tr key={`parameter-${index}-${data.title}`}>
                      <td>{param.name}</td>
                      <td>{param.type}</td>
                      <td>{param.description}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </>
      )}

      {data.return && data.return.length > 0 && (
        <>
          <div className="table-wrapper">
            <h4>Return Information</h4>
            <table border={1}>
              <thead>
                <tr>
                  <th>Return Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  data.return.map((param: any, index: number) => (
                    <tr key={`return-${index}-${data.title}`}>
                      <td>{param.type}</td>
                      <td>{param.description}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </>
      )}

      {data.link && data.link.length > 0 && (
        <>
          <div className="table-wrapper">
            <h4>External links</h4>
            <table border={1}>
              <tbody>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  data.link.map((l: any, index: number) => (
                    <tr key={`parameter-${index}-${data.title}`}>
                      <td>
                        <a href={l.url} target={`_blank`}>
                          <i className="zi-link"></i> {l.url}
                        </a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </>
      )}

      {data.see && data.see.length > 0 && (
        <>
          <div className="references right">
            <h4>References</h4>

            <div className={'internal_references'}>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.see.map((ref: any, index: number) => (
                  <a
                    key={`reference-${index}-${data.title}`}
                    href="javascript:void(0)"
                    onClick={() => {
                      Scroll(ref.reference?.toLowerCase().replace(/\s+/g, '-'));
                    }}
                    className="button icon solid  scrolly"
                  >
                    <i className={'zi-eye'}></i> {ref.reference}
                  </a>
                ))
              }
            </div>
          </div>
        </>
      )}

      <hr />
    </div>
  );
}
