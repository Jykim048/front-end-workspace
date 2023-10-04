import React, { useState, useEffect } from 'react';
import '../Myinfo.css';
import Signup from './Signup';

const UserInfoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageItem = 7; // 페이지당 표시할 아이템 수
  const categories = [
    '회원정보 변경',
    '내가 쓴 글',
    '내가 쓴 댓글',
    '좋아요 한 글',
    '좋아요 한 댓글',
    '차단한 사용자',
  ];
  const [categoryData, setCategoryData] = useState([]);

  // 예시 더미 데이터
  useEffect(() => {
    const data = Array.from({ length: 50 }, (_, i) => `데이터 ${i + 1}`);
    setCategoryData(data);
  }, []);

  const handleCategoryClick = (category) => {
    if (category === '회원정보 변경') {
      return;
    }
    setSelectedCategory(category);
    setCurrentPage(1); // 새 카테고리 선택 시 1로 리셋
  };

  const indexOfLastItem = currentPage * pageItem;
  const indexOfFirstItem = indexOfLastItem - pageItem;
  const currentItems = categoryData.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="category-page">
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="selected-category">
        {selectedCategory && (
          <div>
            <h2>{selectedCategory}</h2>
            <table className="user-info-table">
              <thead>
                <tr>
                  <th>항목</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* 페이지네이션 컴포넌트 */}
            <div className="pagination">
              {Array.from({ length: Math.ceil(categoryData.length / pageItem) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoPage;