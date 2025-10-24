

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DocsSingle(data: any){



  return (
    <>
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
              <i className="zi-codepen"></i> {data.title}
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

      {data.params && data.params.length > 0 && (
        <>
          <div className="table-wrapper">
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
              ))}

              </tbody>

            </table>
          </div>
        </>
      )}

      <hr />
    </>
  );
}
