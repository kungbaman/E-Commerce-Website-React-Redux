import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdStarRate } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ADD, DELETE, REDUCE_TO_ITEM  } from "../../../controller/action";

export const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dispatch = useDispatch();

  const increment = (e) => {
    dispatch(ADD(e));
  };
  const decrement = (item) => {
    dispatch(REDUCE_TO_ITEM(item));
  };

  const history = useHistory()

  const forceDelete = (id) => {
    dispatch(DELETE(id))
    history.push("/")
  }
  return (
    <>
      <article>
        <section className="details">
          <h2 className="details_title">Product Details pages</h2>
          {data.map((item) => (
            <div className="details_content">
              <div className="details_content_img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details_content_detail">
                <h1>{item.title}</h1>
                <div className="rating">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor=""> ( 1 customer review )</label>
                </div>
                <h3>${item.price * item.qty}</h3>
                <p>{item.author}</p>
                <div className="qty">
                  <div className="count">
                    <button onClick={() => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={item.qty <= 1 ? () => forceDelete(item.id) : () => decrement(item) }>
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className="button">Add To Cart</button>
                </div>
                <div className="desc">
                  <h4>PRODUCTS DESCRIPTION</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet asperiores sit quas quo vel aliquid quisquam labore
                    omnis veniam iste, deserunt hic nesciunt libero sint soluta
                    praesentium, corporis illo? Illum.
                  </p>

                  <h4>PRODUCT DETAILS</h4>
                  <ul>
                  <li>
                      <p> Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};
