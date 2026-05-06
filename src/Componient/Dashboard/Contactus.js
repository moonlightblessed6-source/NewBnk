import styled from "styled-components";



export const Contact = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;


.sections{
    width: 80%;
    margin: auto;
}


.header{
    padding: 20px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    cursor: pointer;
}

.healp{
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 25px;
}

.healp h3{
    font-size: 15px;

}
.healp p{
    font-size: 12px;

}



@media screen and (max-width: 925px) {
    .sections{
    width: 95%;
   

}
}
`