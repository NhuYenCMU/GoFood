import React from 'react';

const ReviewTable = () => (
  <div className="card">
    <div className="card-header">
      <h4>Đánh Giá Món Ăn</h4>
    </div>
    <div className="card-body">
      <div className="fm-menu">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Taste</th>
              <th scope="col">
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Presentation</th>
              <th scope="col">
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </th>
            </tr>
            <tr>
              <th scope="col">Texture</th>
              <th scope="col">
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </th>
            </tr>
            <tr>
              <th scope="col">Temperature</th>
              <th scope="col">
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <i className="fa-regular fa-star"></i>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="card-footer text-end mb-3">
      <h6 className="Comment text-right">Comment:</h6>
      <textarea rows="3" className="form-control mb-2" name="" id="">Gửi đánh giá phản hồi</textarea>
      <button className="btn btn-warning"> Đánh giá </button>
    </div>
  </div>
);

export default ReviewTable;
