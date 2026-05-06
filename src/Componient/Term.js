import styled from "styled-components";




export const Term = styled.main`

font-family: "Zalando Sans Expanded", sans-serif;

.main{
    background-color: #112533;
    width: 100%;

  color: white;
    padding: 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

}

.fisi{
    width: fit-content;
    padding: 7px 10px;
    border-radius: 12px;
    background-color: #28434d;
    font-size: 13px;
}





.termsbody{
    width: 80%;
    margin: auto;
    box-shadow: 1px 1px 5px;
    padding: 30px 40px;
    margin-block: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
}

.termsbody div {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.termsbody div h1{
    font-size: 14px;
}
.termsbody div p{
    font-size: 13px;
}

ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 13px;
    padding: 0px  10px;
}

.contact{
    display: flex;
    flex-direction: column;
       justify-content: flex-start;
       align-items: flex-start;
       font-size: 13px;
       border-bottom: 1px  solid lightgray;
}

.contact span{
    padding: 10px 0px;
}


@media screen and (max-width: 700px){
    .termsbody{
        width: 95%;
    }
}

`