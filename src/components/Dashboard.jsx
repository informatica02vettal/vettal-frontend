import React from 'react';

const Dashboard = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#calendar3" />
            </svg>
            This week
          </button>
        </div>
      </div>

      <canvas
        className="my-4 w-100"
        id="myChart"
        width="1147"
        height="484"
        style={{ display: 'block', boxSizing: 'border-box', height: '484px', width: '1147px' }}
      ></canvas>

      <h2>Section title</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1,001', 'random', 'data', 'placeholder', 'text'],
              ['1,002', 'placeholder', 'irrelevant', 'visual', 'layout'],
              ['1,003', 'data', 'rich', 'dashboard', 'tabular'],
              ['1,003', 'information', 'placeholder', 'illustrative', 'data'],
              ['1,004', 'text', 'random', 'layout', 'dashboard'],
              ['1,005', 'dashboard', 'irrelevant', 'text', 'placeholder'],
              ['1,006', 'dashboard', 'illustrative', 'rich', 'data'],
              ['1,007', 'placeholder', 'tabular', 'information', 'irrelevant'],
              ['1,008', 'random', 'data', 'placeholder', 'text'],
              ['1,009', 'placeholder', 'irrelevant', 'visual', 'layout'],
              ['1,010', 'data', 'rich', 'dashboard', 'tabular'],
              ['1,011', 'information', 'placeholder', 'illustrative', 'data'],
              ['1,012', 'text', 'placeholder', 'layout', 'dashboard'],
              ['1,013', 'dashboard', 'irrelevant', 'text', 'visual'],
              ['1,014', 'dashboard', 'illustrative', 'rich', 'data'],
              ['1,015', 'random', 'tabular', 'information', 'text'],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;
