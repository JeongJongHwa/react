import React from 'react';


// react의 모든 컴포넌트 클래스는  extends React.Component 를 상속하여야 합니다.
class Menu extends React.Component { // eslint-disable-line no-unused-vars

// 생성자 
// this.state를 사용하려고 constructor을 사용
constructor(props) {
    super(props);
    this.state = {
           
   }
   
}



// 클래스 컴포넌트에서 반드시 구현되야 하는 유일한 메서드입니다.
// 보통은 JSX 를 사용하여 구현합니다
render() {

    return(        
        <div className="menu_div">
            <ul>
                    <li><h3>메뉴1</h3></li>
                    <li><h3>메뉴2</h3></li>
                    <li><h3>메뉴3</h3></li>
                    <li><h3>메뉴4</h3></li>
            </ul>              
        </div>
    );
}
}

// Class 컴포넌트 사용시 필수 작성..
export default Menu;