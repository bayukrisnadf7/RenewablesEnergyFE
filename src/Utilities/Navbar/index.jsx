const Navbar = () => {
  return (
    <div className="flex items-center bg-primary text-white w-full h-20">
      <div className="flex justify-between w-full mx-20">
        <div className="flex items-center">
          <h1>Logo</h1>
        </div>
        <ul className="flex gap-10 items-center">
          <li>Home</li>
          <li>Trade</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex gap-2">
            <button className="hover:text-secondary">ENG</button>
            <p>|</p>
            <button className="hover:text-secondary">ID</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
