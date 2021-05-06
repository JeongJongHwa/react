import React from 'react';
import WriteBtn from './WriteBtn';

// react의 모든 컴포넌트 클래스는  extends React.Component 를 상속하여야 합니다.
class WriteList extends React.Component { // eslint-disable-line no-unused-vars

// 생성자 
// this.state를 사용하려고 constructor을 사용
constructor(props) {
    super(props);
    console.log( props )
}

// 클래스 컴포넌트에서 반드시 구현되야 하는 유일한 메서드입니다.
// 보통은 JSX 를 사용하여 구현합니다
// 클래스 컴포넌트에서 반드시 구현되야 하는 유일한 메서드입니다.
// 보통은 JSX 를 사용하여 구현합니다
render() {
    let style = {
        top : 200,
        left: 300
    }
    
    const listItems = this.props.object.map((object,i) =>  
      <WriteBtn style={{top:style.top+(i*100),left:style.left+(i*400)}} key={i} object={object} />
               
    );
    console.log( listItems )
    return(        
        <ul>
            {listItems}
        </ul>
        
    );
}
}

// Class 컴포넌트 사용시 필수 작성..
export default WriteList;