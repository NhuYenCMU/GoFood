import React from 'react';

const RankingTable = () => (
  <div className="card mt-3 mb-3">
    <div className="card-header">
      <h4 className="my-3">Bảng Xếp Hạng</h4>
    </div>
    <div className="card-body">
      <div className="fm-menu">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Lượt thích</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">@thoidai</th>
              <td>10k</td>
            </tr>
            <tr>
              <th scope="row">@username</th>
              <td>12k</td>
            </tr>
            <tr>
              <th scope="row">@username</th>
              <td colspan="2">15k</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default RankingTable;
