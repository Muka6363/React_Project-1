import React from "react";
import Header from "./components/Header";
import MyCard from "./components/Main";
import Urfam63 from "./helper/Urfam63";
import "./components/Main.css";
//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.

//! Bir componentin return () kismi ise JSX kodlari icerir.

//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.

//? App componentinin function declaration ile tanimlanmasi
function App() {
  return (
    //* JSX
    <>
      <Header />
      {/* {Urfam63.map((item) => {
        return <MyCard key={item.id} name={item.name} img={item.img} />;
      })} */}
      {Urfam63.map((item) => (
        <MyCard key={item.id} name={item.name} src={item.src} />
      ))}
    </>
  );
}

export default App;
