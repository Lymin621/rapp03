// props 객체를 사용하여 부모가 보낸 속성들 받아오기
function Body(props){
    //console.log(props);
    return <div className="body">
        {`부서 : ${props.deptName}, 지점 : ${props.location}`}
    </div>;
}
export default Body;

// object 객체를 사용하여 부모가 보낸 속성들 받아오기 - 반드시 속성명 일치해야함.
// export default function Body({deptName, location, depoNo}) {
//     return <div className="body">
//         {`부서번호: ${deptNo}, 부서명 : ${deptName}, 지점 : ${location}`}
//         </div>;
// };