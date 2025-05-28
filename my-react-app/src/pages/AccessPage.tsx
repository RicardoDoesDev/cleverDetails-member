import React from 'react';

const AccessPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="Access" className="w-full h-auto" />

        <div className="text-center text-3xl py-12 text-white">
          <p className="mb-4">As a guest or homeowner with Clever Details, you unlock exclusive benefits from our trusted local partners. From fine dining and wellness to outdoor adventures, enjoy unique perks made to elevate your Algarve experience.</p>
          <p className="mb-4">These advantages are reserved for those who <a href="https://www.cleverdetails.com" target="_blank" rel="noopener noreferrer" className="text-secondary">book their holiday</a> with Clever Details or entrust us with their property. It's our way of saying thank you by making your stay or investment even more rewarding.</p>
          <p className="mb-4">Explore the <a href="https://www.cleverdetails.com" target="_blank" rel="noopener noreferrer" className="text-secondary">full list</a> of partner perks and enjoy more than just a stay.</p>
          <p className="mb-4">With Clever Details, your holiday or home comes with much more than just a key.</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="Access" className="w-2/5 mx-auto" />
        <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="Access" className="w-2/5 mx-auto" />
      </div>
      
      <div className="flex flex-row items-center justify-center gap-4 mt-24">
        <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="Access" className="w-2/5 mx-auto" />
        <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="Access" className="w-2/5 mx-auto" />
      </div>

      <button className="bg-secondary text-white px-8 py-8 rounded-md mx-auto block mb-12 mt-24 text-5xl" onClick={() => window.open('https://www.cleverdetails.com/', '_blank')}>
        Explore Our Homes
      </button>
    </>
  );
};

export default AccessPage; 