// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import TrangChu from "../components/TrangChu";
// import Login from "../components/Login";
// import Register from "../components/Register";
// import Header from "../components/Header";

// const AppRouter = () => {
//   const ROUTER = {
//     USER: {
//       HOME: "/",
//       LOGIN: "/login",
//       REGISTER: "/register",
//     },
//   };

//   const renderUser = () => {
//     const userRouter = [
//       {
//         path: ROUTER.USER.HOME, // Sử dụng ROUTER đã định nghĩa
//         Component: <TrangChu />,
//       },
//       {
//         path: ROUTER.USER.LOGIN, // Sử dụng ROUTER đã định nghĩa
//         Component: <Login />,
//       },
//       {
//         path: ROUTER.USER.REGISTER, // Sử dụng ROUTER đã định nghĩa
//         Component: <Register />,
//       },
//     ];
//     return (
//       <Routes>
//         {userRouter.map((item, key) => (
//           <Route key={key} path={item.path} element={item.Component} />
//         ))}
//       </Routes>
//     );
//   };
//   return
//   <Router>
//     <Header />
//     {renderUser()}
//   </Router>
// };

// export default AppRouter;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrangChu from "../components/TrangChu";
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Header";

const AppRouter = () => {
  const ROUTER = {
    USER: {
      HOME: "/",
      LOGIN: "/login",
      REGISTER: "/register",
    },
  };

  // const renderUser = () => {
  //   const userRouter = [
  //     {
  //       path: ROUTER.USER.HOME,
  //       Component: TrangChu,
  //     },
  //     {
  //       path: ROUTER.USER.LOGIN,
  //       Component: Login,
  //     },
  //     {
  //       path: ROUTER.USER.REGISTER,
  //       Component: Register,
  //     },
  //   ];
  //   return (
  //     <Routes>
  //       {userRouter.map((item, key) => (
  //         <Route key={key} path={item.path} element={<item.Component />} />
  //       ))}
  //     </Routes>
  //   );
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTER.USER.HOME} element={<TrangChu />} />
        <Route path={ROUTER.USER.LOGIN} element={<Login />} />
        <Route path={ROUTER.USER.REGISTER} element={<Register />} />
      </Routes>
     
    </Router>
  );
};

export default AppRouter;
