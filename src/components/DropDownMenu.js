const DropDownMenu = () => {
  const Menus = [
    "Giới thiệu chung",
    "Hướng dẫn sử dụng",
    "Quy chế hoạt động",
    "Chính sách bảo mật thông tin",
    "Cơ chế giải quyết tranh chấp",
  ];
  return (
    <>
      {/* <div className="dropdown-menu"> */}
        <ul>
          {Menus.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      {/* </div> */}
    </>
  );
};
export default DropDownMenu;
