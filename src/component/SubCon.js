export default function SubCon({name, location, favorList, children}){
    export default function SubCon(props){

        //구조분해할당변수로 받아서 처리
        let {name, location, favorList} = props.subp;

        //구조분해할당변수로 받아서 처리
        // let{name, location, favorList} = props;
        console.log(name, location, favorList);

        return (
            <div className="Subcon">
                {name}은 {location}에 거주합니다.
                <h1>{name}님이 좋아하는 음식리스트</h1>
                {
                    favorList != null && favorList !=
                    undefined && favorList != []
                    ? (<h2>{ favorList.length }개의 음식을 좋아합니다.</h2>)
                    : "좋아하는 음식이 설정되지 않았습니다."
                }
                <br />
                {
                    favorList != null && favorList !=
                    undefined && favorList != []
                    ? (<ul>{favArr(favorList)}</ul>)
                    : "없습니다."
                }
                <br />
                {/* {children} */}
                {/* {props.children} */}
            </div>
        );
    }

    // function favArr(arr){
    //     return arr.map((item, index) => <li key={index}>{item}</li>);
    // }

    // function farArr(arr){
    //     let farr = [];
    //     for(let i = 0; i < arr.length; i++){
    //         farr.push(<li key={i}>{arr[i]}</li>);
    //     }
    //     return farr;
    // }

    function favArr(arr){
        let farr = [];
        for(let i = 0; i < arr.length; i++){
            farr.push(<li>{arr[i]}</li>);
        }
        return farr;
    }

    //부모 컴포넌트에서 받은 값이 undefined로 전달될 경우 디폴트 값을 설정하는 방법
    //부모 컴포넌트에서 받은 속성명 : 속성값 형식으로 default 값 지정
    SubCon.defaultProps = {
        favorList: [],
    };
}