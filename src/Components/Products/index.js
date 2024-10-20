import ProductCard from '../ProductCard';

import './index.css'; 

const plantData = [
    { id: 1, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 2, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 3, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 4, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 5, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 6, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 7, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 8, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 9, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 10, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 11, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 12, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 13, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 14, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 15, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 16, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 17, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 18, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 19, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 20, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 21, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 22, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 23, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 24, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 25, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 26, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 27, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 28, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_95_1_ik8suu.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 29, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433895/Group_110_1_i43ufd.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
    { id: 30, image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729433978/Group_111_jppgan.png", name: "Monstera", description: "Indoor Plant, Low maintenance", rating: 4.9, actualPrice: "₹ 359", price: "₹ 299" },
  ];
  

  const Products = () => {
    return (
      <div className="products">
        {plantData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  export default Products;
  
  

  