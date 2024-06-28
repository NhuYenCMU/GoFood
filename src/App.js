import React from 'react';
import './homepage.css';
// import './footer.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import RankingTable from './components/RankingTable';
import ReviewTable from './components/ReviewTable';
import DishCard from './components/DishCard';
// import Login from './components/Login';
// import Footer from './components/Footer';

const App = () => {
  const dishes = [
    {
      image: 'img/5.png',
      name: 'Bún Chả Hà Nội',
      description: 'Bún chả Hà Nội gồm thịt nướng thơm lừng, nước chấm chua ngọt,...',
      oldPrice: '$350',
      newPrice: '$240'
    },
    {
      image: 'img/6.png',
      name: 'Gỏi Cuốn Sài Gòn',
      description: 'Gỏi cuốn với tôm, thịt, bún và rau sống cuộn trong bánh tráng mỏng.',
      oldPrice: '$15',
      newPrice: '$12'
    },
    {
      image: 'img/7.png',
      name: 'Cao Lầu Hội An',
      description: 'Cao lầu với sợi mì vàng dai, thịt xá xíu, rau sống và bánh đa giòn',
      oldPrice: '$20',
      newPrice: '$16'
    },
    {
      image: 'img/8.png',
      name: 'Mì Quảng Đà Nẵng',
      description: 'Mì Quảng với sợi mì vàng, thịt gà hoặc tôm, trứng cút,...',
      oldPrice: '$25',
      newPrice: '$20'
    }
  ];

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container mt-4">
        <div className="row">
          {dishes.map((dish, index) => (
            <DishCard 
              key={index}
              image={dish.image}
              name={dish.name}
              description={dish.description}
              oldPrice={dish.oldPrice}
              newPrice={dish.newPrice}
            />
          ))}
        </div>
        <RankingTable />
        <ReviewTable />
      </div>
      {/* <Login /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
