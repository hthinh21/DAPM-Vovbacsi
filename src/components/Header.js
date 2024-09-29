import '../style/header.css';
import '../style/allstyle.css';

const Header = ()=> {
    return (
        <>
       <div className='header'>
            <div className='nav-bar'>
                
                    
                    <img src="https://vovbacsi24.com/img/img_skin/logo_new.png " alt="#" height="58px"></img>
                    <ul className='navbar-left'>
                    <li className='trChu'> <a href="#">TRANG CHỦ</a> </li>
                    <li className='capCuu'> <a href="sos">CẤP CỨU</a> </li>
                    <li className='gioiThieu'> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                    GIỚI THIỆU<span class="caret"></span></a></li>
                    
                    </ul>
                    <ul className='navbar-right'>
                        <li className='dKy'> <a href=''> </a> <span>ĐĂNG KÝ</span></li>
                        <li className='dNhap'> <a href=''> </a> <span>ĐĂNG NHẬP</span></li>
                    </ul>
                   
                  
            
            </div>
       </div>
      
        
        </>
    )
}
export default Header;