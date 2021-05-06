import React from 'react';


// react의 모든 컴포넌트 클래스는  extends React.Component 를 상속하여야 합니다.
class WriteBtn extends React.Component { // eslint-disable-line no-unused-vars

// 생성자 
// this.state를 사용하려고 constructor을 사용
constructor(props) {
    super(props);
    this.state = {
            top : props.style.top,
            left: props.style.left,
            prevTop: 0,
            prevLeft: 0,
            position:'absolute'
   }
  
}

// 드래그 시작시 
onDragStart = (e)=> {
    console.log(e);
    
    // 컴포넌트 드래그시 컴포넌트 가로(정중앙),세로(정중앙) 기준으로 이동된 포인터를 계산
    this.setState({
        
        prevTop: e.nativeEvent.offsetX,
        prevLeft: e.nativeEvent.offsetY
        
    });

    e.dataTransfer.effectAllowed = 'move';
         
}

// 드래그 종료시! event
onDragEnd = (e) => {
    //console.log( e )
    
    if( e.target.className === "write_btn_enter" ){
        e.target.className = "write_btn";
    }

    // 컴포넌트 드래그시 컴포넌트 가로(정중앙),세로(정중앙) 기준으로 이동된 포인터를 계산
    let left=e.pageX-this.state.prevTop;
    let top=e.pageY-this.state.prevLeft;

    
    if( left < 380 ) {
        left=380;
    }

    if( top < 150 ) {
        top = 150;
    }

    this.setState({
        left: left + 'px',
        top:  top + 'px'   
    });

};

// 드롭 했을떄의 event
onDrop = (e) => {
    e.preventDefault();

    if( e.target.className === "write_btn_enter" ){
        e.target.className = "write_btn";
    }

} 

// 더블클릭시 event
onDoubleClick =(e) => {
    //console.log( "db click" )   
    
};

// 컴포넌트를 선택하여 드래그중 event
onDragOver=(e)=>{
    e.preventDefault();
    //console.log( e )
};

// 컴포넌트를 선택하여 드래그시 다른 컴포넌트 영역 안으로 들어갔을경우 event
onDragEnter=(e)=>{
    if( e.target.className === "write_btn" ){
        e.target.className = "write_btn_enter";
        //console.log( e )
    }
    
};

// 컴포넌트를 선택하여 드래그시 다른 컴포넌트 영역 안으로 들어갔다가 나갔을경우 event
onDragLeave=(e)=>{
    if( e.target.className === "write_btn_enter" ){
        e.target.className = "write_btn";
        //console.log( e )
    }
    
};

// 클래스 컴포넌트에서 반드시 구현되야 하는 유일한 메서드입니다.
// 보통은 JSX 를 사용하여 구현합니다
render() {



    var _article = null;

    if ( this.props.object !== undefined ){ // object 들어올경우
        _article = 
        <div id={this.props.object["index"]} style={this.state} className="write_btn" draggable={true} 
                onDragStart={(e)=>{this.onDragStart(e);}} 
                onDragEnd={(e)=>{this.onDragEnd(e);}} 
                onDoubleClick={(e)=>{this.onDoubleClick(e);}} 
                onDrop={(e)=>{this.onDrop(e);}} 
                onDragOver={(e)=> {this.onDragOver(e);}}
                onDragEnter={(e)=>{this.onDragEnter(e);}}
                onDragLeave={(e)=>{this.onDragLeave(e);}} >
            <p>{this.props.object["index"]}</p>
            <p>{this.props.object["name"]}</p>
            <p>{this.props.object["age"]}</p>
        </div> 
    }
   

    return(        
        <div>
            {_article}              
        </div>
    );
}
}

// Class 컴포넌트 사용시 필수 작성..
export default WriteBtn;