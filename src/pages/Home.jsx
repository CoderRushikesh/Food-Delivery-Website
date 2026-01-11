import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import categories from "../category";
import Card from "../components/Card";
import { food_items } from "../food";
import Footer from "../components/Footer";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2";

function Home() {
  const { input, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);

  /* 🔍 SEARCH FILTER */
  useEffect(() => {
    const newList = food_items.filter(
      (item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input, setCate]);

  /* 🧩 CATEGORY FILTER */
  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  /* 🛒 CART DATA FROM REDUX */
  const items = useSelector((state) => state.cart);

  /* 💰 PRICE CALCULATIONS (CORRECT) */
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const deliveryFee = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {/* 📂 CATEGORY SECTION */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {categories.map((item) => (
            <div
              key={item.name}
              className="w-[120px] h-[110px] bg-white p-5 font-semibold rounded-lg shadow-xl hover:bg-green-200 cursor-pointer"
              onClick={() => filter(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* 🍔 FOOD ITEMS */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      {/* 🛒 CART DRAWER */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 overflow-auto transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center">
          <span className="text-green-500 text-lg font-semibold">
            Order Items
          </span>
          <RxCross1
            className="w-6 h-6 text-red-500 cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </header>

        {/* CART ITEMS */}
        <div className="mt-8 flex flex-col gap-6">
          {items.length === 0 && (
            <p className="text-gray-500 text-center">
              Cart is empty
            </p>
          )}

          {items.map((item) => (
            <Card2
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              qty={item.qty}
            />
          ))}
        </div>

        {/* BILL SUMMARY */}
        {items.length > 0 && (
          <>
            <div className="border-y-2 border-gray-300 mt-8 p-6 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>₹{taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between p-6 text-xl font-semibold">
              <span>Total</span>
              <span className="text-green-500">₹{total}</span>
            </div>

            <button className="w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-400">
              Place Order
            </button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
